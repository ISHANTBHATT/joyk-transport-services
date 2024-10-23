"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SyncLoader } from "react-spinners";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export default function History() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [bookings, setBookings] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();

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
    router.push("/login");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">{t.History.booking}</h2>
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
                          {booking.pickup} {t.History.to} {booking.dropoff}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {booking.returnTrip
                              ? `${t.History.Round}`
                              : `${t.History.One}`}
                          </p>
                          <p
                            className={`ml-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-white ${
                              booking.bookingConfirmed
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          >
                            {booking.bookingConfirmed
                              ? `${t.History.Confirmed}`
                              : `${t.History.hold}`}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <p className="flex items-center text-sm text-gray-500">
                            {t.History.Price}:{booking.price}$
                          </p>
                          <p className="flex items-center text-sm text-gray-500">
                            {t.History.Cars}: {booking.cars}
                          </p>
                          <p className="flex items-center text-sm text-gray-500 ">
                            {t.History.Passengers}: {booking.passengers}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="mt-2 flex flex-col  text-sm text-gray-500 sm:mt-0">
                            <p>
                              {t.History.Pickup}:{" "}
                              {new Date(booking.date).toDateString()}
                              {/* {new Date(booking.date).toLocaleDateString()} */}
                              <span>
                                , {t.History.time}: {booking.time}
                              </span>
                            </p>

                            {booking.returnTrip ? (
                              // <div className="mt-2 flex text-sm text-gray-500 sm:mt-0">
                              <p className="mt-2 sm:mt-0">
                                {t.History.Return}:{" "}
                                {new Date(booking.returnDate).toDateString()},{" "}
                                {booking.returnTime}
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
                                  {t.History.cancel}
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
                <img src="/images/nodata2.jpg" className="" />
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
