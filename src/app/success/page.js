// src/pages/success.js
// "use client";
// export default function SuccessPage({ booking }) {
//   return (
//     <div>
//       <h1>Booking Confirmed!</h1>
//       <p>Your booking has been successfully confirmed.</p>
//       <h2>Booking Details</h2>
//       <ul>
//         <li>
//           <strong>Pickup:</strong> {booking.pickup}
//         </li>
//         <li>
//           <strong>Dropoff:</strong> {booking.dropoff}
//         </li>
//         <li>
//           <strong>Passengers:</strong> {booking.passengers}
//         </li>
//         <li>
//           <strong>Cars:</strong> {booking.cars}
//         </li>
//         <li>
//           <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
//         </li>
//         <li>
//           <strong>Time:</strong> {booking.time}
//         </li>
//         {booking.returnTrip && (
//           <>
//             <li>
//               <strong>Return Date:</strong>{" "}
//               {new Date(booking.returnDate).toLocaleDateString()}
//             </li>
//             <li>
//               <strong>Return Time:</strong> {booking.returnTime}
//             </li>
//           </>
//         )}
//         <li>
//           <strong>Price:</strong> ${booking.price}
//         </li>
//       </ul>
//     </div>
//   );
// }

// // Optionally, use getServerSideProps to pass booking data dynamically
// export async function getServerSideProps(context) {
//   const { query } = context;
//   const booking = query; // Assuming booking details are passed via query params
//   return {
//     props: { booking }, // will be passed to the page component as props
//   };
// }

// "use client";
// import { VscVerifiedFilled } from "react-icons/vsc";

// export default function SuccessPage() {
//   return (
//     <div className="flex flex-col justify-center">
//       <div className="flex justify-center">
//         {/* <VscVerifiedFilled className="w-80 h-80" /> */}
//         <img src="/images/verified.jpg" className="w-80" />
//       </div>

//       <h1 className="text-4xl font-bold mb-4 text-center text-green-500">
//         Booking Confirmed!
//       </h1>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Booking from "@/app/models/Booking";

async function getBooking(id) {
  const booking = await Booking.findById(id);
  if (!booking) {
    notFound();
  }
  return booking;
}

export default async function BookingSuccess({ searchParams }) {
  const bookingId = searchParams.bookingId;
  const booking = await getBooking(bookingId);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img src="/images/verified.jpg" className="w-10" />
          <h1 className="text-2xl font-bold  text-center text-[#37aa9d]">
            Booking Confirmed!
          </h1>
        </div>

        <div className="space-y-4">
          <p className="text-lg">
            Thank you for your booking. Here are your details:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Pickup:</strong> {booking.pickup}
            </li>
            <li>
              <strong>Dropoff:</strong> {booking.dropoff}
            </li>
            <li>
              <strong>Passengers:</strong> {booking.passengers}
            </li>
            <li>
              <strong>Cars:</strong> {booking.cars}
            </li>
            <li>
              <strong>Date:</strong>{" "}
              {new Date(booking.date).toLocaleDateString()}
            </li>
            <li>
              <strong>Time:</strong> {booking.time}
            </li>
            <li>
              <strong>Vehicle Type:</strong> {booking.vehicleType}
            </li>
            <li>
              <strong>Price:</strong> ${booking.price}
            </li>
            {booking.returnTrip && (
              <>
                <li>
                  <strong>Return Date:</strong>{" "}
                  {new Date(booking.returnDate).toLocaleDateString()}
                </li>
                <li>
                  <strong>Return Time:</strong> {booking.returnTime}
                </li>
              </>
            )}
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            A confirmation email has been sent to user's registered email
            address.
          </p>
        </div>
      </div>
    </div>
  );
}
