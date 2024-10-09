"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SyncLoader } from "react-spinners";
import Link from "next/link";

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
    return (
      <div className="min-h-screen flex justify-center items-center">
        <SyncLoader />
      </div>
    );
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
            {bookings.length > 0 ? (
              <>
                {bookings.map((booking) => (
                  <div key={booking._id}>
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
                          <p
                            className={`ml-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-white ${
                              booking.bookingConfirmed
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          >
                            {booking.bookingConfirmed
                              ? "Your Ride is Confirmed"
                              : "On hold"}
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
                        <div className="flex items-center gap-4">
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
                          <div className="flex">
                            <Link
                              href={"/booking-history/delete/" + booking._id}
                            >
                              <button
                                type="button"
                                // onClick={handleSendVerification}
                                className="mt-2 relative flex gap-2 h-[50px] w-full items-center justify-center overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-red-600 before:duration-500 before:ease-out hover:shadow-red-600 hover:before:h-56 hover:before:w-full rounded-lg"
                              >
                                <span className="relative z-10 text-sm p-4">
                                  Cancel Ride
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center">
                <img src="/images/nodata.jpg" className="w-[600px] h-[600px]" />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
