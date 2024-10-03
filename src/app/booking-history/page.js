// "use client";
// import { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";

// export default function History() {
//   const [bookings, setBookings] = useState([]);
//   const { data: session } = useSession();

//   useEffect(() => {
//     const fetchBookings = async () => {
//       if (session) {
//         const response = await fetch(`/api/bookings?userId=${session.user.id}`);
//         const data = await response.json();
//         if (data.success) {
//           setBookings(data.bookings);
//         }
//       }
//     };
//     fetchBookings();
//   }, [session]);

//   if (!session) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold mb-4">Booking History</h2>
//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           {bookings.map((booking) => (
//             <li key={booking._id}>
//               <div className="px-4 py-4 sm:px-6">
//                 <div className="flex items-center justify-between">
//                   <p className="text-sm font-medium text-indigo-600 truncate">
//                     {booking.direction === "airportToSenegal"
//                       ? "Airport to Senegal"
//                       : "Senegal to Airport"}
//                   </p>
//                   <div className="ml-2 flex-shrink-0 flex">
//                     <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                       {booking.returnTrip ? "Round Trip" : "One Way"}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-2 sm:flex sm:justify-between">
//                   <div className="sm:flex">
//                     <p className="flex items-center text-sm text-gray-500">
//                       Destination: {booking.destination}
//                     </p>
//                     <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
//                       Passengers: {booking.passengers}
//                     </p>
//                   </div>
//                   <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
//                     <p>Date: {new Date(booking.date).toLocaleString()}</p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function History() {
  const [bookings, setBookings] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchBookings = async () => {
      if (session) {
        const response = await fetch("/api/bookings");
        const data = await response.json();
        // const db = data.bookings.reverse();
        // console.log("data booking -->", db);
        if (data.success) {
          setBookings(data.bookings);
        }
      }
    };
    if (status === "authenticated") {
      fetchBookings();
    }
  }, [session, status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex justify-center">
        <img src="/images/login.jpg" className="w-1/2" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Booking History</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <li key={booking._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {/* {booking.direction === "airportToSenegal"
                        ? "Airport to Senegal"
                        : "Senegal to Airport"} */}
                      {booking.pickup} to {booking.dropoff}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {booking.returnTrip ? "Round Trip" : "One Way"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <p className="flex items-center text-sm text-gray-500">
                        Price:{booking.price}$
                      </p>
                      <p className="flex items-center text-sm text-gray-500">
                        No of Cars: {booking.cars}
                      </p>
                      <p className="flex items-center text-sm text-gray-500 ">
                        Passengers: {booking.passengers}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col  text-sm text-gray-500 sm:mt-0">
                      <p>
                        Pickup Date:{" "}
                        {new Date(booking.date).toLocaleDateString()}
                        <span>, Pickup Time: {booking.time}</span>
                      </p>

                      {booking.returnTrip ? (
                        // <div className="mt-2 flex text-sm text-gray-500 sm:mt-0">
                        <p className="mt-2 sm:mt-0">
                          Return Date:{" "}
                          {new Date(booking.returnDate).toLocaleString()}
                        </p> // </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
