// "use client";

// import { useState } from "react";
// import { FaRegStar } from "react-icons/fa";

// const RatingStars = ({ rating, setRating, name }) => (
//   <div className="flex items-center space-x-1">
//     {[1, 2, 3, 4, 5].map((star) => (
//       <FaRegStar
//         key={star}
//         className={`w-6 h-6 cursor-pointer ${
//           star <= rating ? "text-yellow-400" : "text-gray-300"
//         }`}
//         onClick={() => setRating(star)}
//       />
//     ))}
//   </div>
// );

// export default function TaxiSurvey() {
//   const [overallRating, setOverallRating] = useState(0);
//   const [kindnessRating, setKindnessRating] = useState(0);
//   const [drivingSkillsRating, setDrivingSkillsRating] = useState(0);
//   const [navigationRating, setNavigationRating] = useState(0);
//   const [pricingRating, setPricingRating] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted");
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto my-14 bg-white shadow-md rounded-lg overflow-hidden">
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">
//           Taxi Customer Satisfaction Survey
//         </h2>
//         <p className="text-gray-500 mb-6 text-sm">
//           We appreciate your feedback! Please take a moment to complete this
//           survey about your recent taxi ride.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Rate your overall satisfaction with the taxi service
//             </label>
//             <RatingStars
//               rating={overallRating}
//               setRating={setOverallRating}
//               name="overall"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="professionalism"
//               className="block text-sm font-medium mb-2"
//             >
//               How would you rate the professionalism of the taxi driver?
//             </label>
//             <select
//               id="professionalism"
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Please Select</option>
//               <option value="excellent">Excellent</option>
//               <option value="good">Good</option>
//               <option value="average">Average</option>
//               <option value="poor">Poor</option>
//               <option value="very-poor">Very Poor</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Kindness</label>
//               <RatingStars
//                 rating={kindnessRating}
//                 setRating={setKindnessRating}
//                 name="kindness"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Driving Skills
//               </label>
//               <RatingStars
//                 rating={drivingSkillsRating}
//                 setRating={setDrivingSkillsRating}
//                 name="drivingSkills"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Navigation
//               </label>
//               <RatingStars
//                 rating={navigationRating}
//                 setRating={setNavigationRating}
//                 name="navigation"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Pricing</label>
//               <RatingStars
//                 rating={pricingRating}
//                 setRating={setPricingRating}
//                 name="pricing"
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="comments"
//               className="block text-sm font-medium mb-2"
//             >
//               Please provide any additional comments or suggestions for
//               improving the taxi service
//             </label>
//             <textarea
//               id="comments"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               rows="4"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               placeholder="Type your comments here..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-neutral-800 text-white py-2 px-4 rounded-md hover:bg-neutral-700 transition-colors"
//           >
//             Submit Survey
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";

const RatingStars = ({ rating, setRating, name }) => (
  <div className="flex items-center space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaRegStar
        key={star}
        className={`w-6 h-6 cursor-pointer ${
          star <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        onClick={() => setRating(star)}
      />
    ))}
  </div>
);

export default function TaxiSurvey() {
  const { data: session, status } = useSession();
  const [overallRating, setOverallRating] = useState(0);
  const [professionalism, setProfessionalism] = useState("");
  const [kindnessRating, setKindnessRating] = useState(0);
  const [drivingSkillsRating, setDrivingSkillsRating] = useState(0);
  const [navigationRating, setNavigationRating] = useState(0);
  const [pricingRating, setPricingRating] = useState(0);
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      setSubmitMessage("Please log in to submit a survey.");
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          overallRating,
          professionalism,
          kindnessRating,
          drivingSkillsRating,
          navigationRating,
          pricingRating,
          comments,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("Thank you for your feedback!");
        // Reset form fields
        setOverallRating(0);
        setProfessionalism("");
        setKindnessRating(0);
        setDrivingSkillsRating(0);
        setNavigationRating(0);
        setPricingRating(0);
        setComments("");
      } else {
        setSubmitMessage(
          data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      // console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (status == "unauthenticated") {
    router.push("/login");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader />
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-14 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          Taxi Customer Satisfaction Survey
        </h2>
        <p className="text-gray-600 mb-6">
          We appreciate your feedback! Please take a moment to complete this
          survey about your recent taxi ride.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Rate your overall satisfaction with the taxi service
            </label>
            <RatingStars
              rating={overallRating}
              setRating={setOverallRating}
              name="overall"
            />
          </div>

          <div>
            <label
              htmlFor="professionalism"
              className="block text-sm font-medium mb-2"
            >
              How would you rate the professionalism of the taxi driver?
            </label>
            <select
              id="professionalism"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={professionalism}
              onChange={(e) => setProfessionalism(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
              <option value="very-poor">Very Poor</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Kindness</label>
              <RatingStars
                rating={kindnessRating}
                setRating={setKindnessRating}
                name="kindness"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Driving Skills
              </label>
              <RatingStars
                rating={drivingSkillsRating}
                setRating={setDrivingSkillsRating}
                name="drivingSkills"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Navigation
              </label>
              <RatingStars
                rating={navigationRating}
                setRating={setNavigationRating}
                name="navigation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pricing</label>
              <RatingStars
                rating={pricingRating}
                setRating={setPricingRating}
                name="pricing"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium mb-2"
            >
              Please provide any additional comments or suggestions for
              improving the taxi service
            </label>
            <textarea
              id="comments"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Type your comments here..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-2 px-4 rounded-md hover:bg-neutral-700 transition-colors disabled:bg-neutral-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Survey"}
          </button>

          {submitMessage && (
            <p
              className={`text-center ${
                submitMessage.includes("error")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
