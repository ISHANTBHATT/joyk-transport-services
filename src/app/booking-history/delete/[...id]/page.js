// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { MdDelete } from "react-icons/md";
// function Delete() {
//   const router = useRouter();
//   const { id } = useParams();
//   //   console.log(id);
//   //   const [productInfo, setProductInfo] = useState(null);

//   // useEffect(() => {
//   //   if (!id) {
//   //     return;
//   //   }
//   //   else {
//   //     axios.get("/api/getform?id=" + id).then((response) => {
//   //       setProductInfo(response.data);
//   //     });
//   //   }
//   // }, [id]);

//   function goback() {
//     router.push("/booking-history");
//   }
//   async function deletebooking() {
//     try {
//       const response = await fetch(`/api/bookings/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id }), // Passing booking ID in request body
//       });

//       const data = await response.json();

//       if (data.success) {
//         console.log("Booking deleted successfully");
//         goback(); // Navigate back to booking history on successful delete
//       } else {
//         console.error("Failed to delete booking:", data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting booking:", error);
//     }
//     // goback();
//   }
//   return (
//     <>
//       <div className="relative max-w-screen-2xl m-auto h-full pt-28 ml-32 p-8 z-[5]">
//         <div
//           className="w-full h-full flex items-center justify-center"
//           style={{ height: "calc(100vh - 250px)" }}
//         >
//           <div className="w-[450px] h-[320px] bg-white flex flex-col items-center justify-center p-5 py-6 rounded-lg gap-[13px] relative overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
//             <MdDelete className="w-40 h-40 text-red-500" />
//             <p className="text-xl font-extrabold text-center">
//               Are you sure you want to cancel this ride?
//             </p>
//             <p className="text-center font-semibold text-gray-500">
//               This action cannot be undone. This will permanently cancel your
//               booking.
//             </p>

//             <div className="flex gap-5">
//               <button
//                 onClick={deletebooking}
//                 className="w-[120px] h-[50px] bg-[#7b57ff] transition duration-200 border-none text-gray-100 cursor-pointer font-semibold text-base rounded-full hover:bg-[#9173ff]"
//               >
//                 Confirm
//               </button>
//               <button
//                 onClick={goback}
//                 className="w-[120px] h-[50px] bg-gray-300 transition duration-200 text-gray-800 border-none cursor-pointer font-semibold text-base rounded-full hover:bg-gray-200"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Delete;

"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

function Delete() {
  const router = useRouter();
  const { id } = useParams(); // Ensure 'id' is retrieved correctly

  function goback() {
    router.push("/booking-history");
  }

  async function deletebooking() {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Booking deleted successfully
        router.push("/booking-history");
      } else {
        // Handle error
        console.error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  }

  return (
    <div className="relative max-w-screen-2xl m-auto h-full pt-28 ml-32 p-8 z-[5]">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ height: "calc(100vh - 250px)" }}
      >
        <div className="w-[450px] h-[320px] bg-white flex flex-col items-center justify-center p-5 py-6 rounded-lg gap-[13px] relative overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
          <MdDelete className="w-40 h-40 text-red-500" />
          <p className="text-xl font-extrabold text-center">
            Are you sure you want to cancel this ride?
          </p>
          <p className="text-center font-semibold text-gray-500">
            This action cannot be undone. This will permanently cancel your
            booking.
          </p>

          <div className="flex gap-5">
            <button
              onClick={deletebooking}
              className="w-[120px] h-[50px] bg-[#7b57ff] transition duration-200 border-none text-gray-100 cursor-pointer font-semibold text-base rounded-full hover:bg-[#9173ff]"
            >
              Confirm
            </button>
            <button
              onClick={goback}
              className="w-[120px] h-[50px] bg-gray-300 transition duration-200 text-gray-800 border-none cursor-pointer font-semibold text-base rounded-full hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
