"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import { SyncLoader, ClipLoader } from "react-spinners";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../translations";

function Delete() {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = useParams(); // Ensure 'id' is retrieved correctly
  const { data: session, status } = useSession();

  useEffect(() => {
    async function fetchBookingDetails() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/bookings/${id}`);
        const data = await response.json();
        if (data.success) {
          setBooking(data.booking);
        } else {
          setError("Failed to fetch booking details");
        }
      } catch (error) {
        // console.error("Error fetching booking details:", error);
        setError("An error occurred while fetching booking details");
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchBookingDetails();
    }
  }, [id]);

  function goback() {
    router.push("/booking-history");
  }

  async function deletebooking() {
    setDeleteLoading(true);
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        await fetch("/api/cancel-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            booking,
            userEmail: session.user.email,
            userName: session.user.name,
            phone: session.user.phone,
          }),
        });

        router.push("/booking-history");
      } else {
        // Handle error
        console.error("Failed to delete booking");
      }
    } catch (error) {
      // console.error("Error deleting booking:", error);
      setError("An error occurred while deleting the booking");
    }
    setDeleteLoading(false);
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SyncLoader />
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="relative max-w-screen-2xl m-auto h-full z-[5]">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ height: "calc(100vh - 250px)" }}
      >
        <div className="w-[450px] h-[320px] bg-white flex flex-col items-center justify-center p-5 py-6 rounded-lg gap-[13px] relative overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
          <MdDelete className="w-40 h-40 text-red-500" />
          <p className="text-xl font-extrabold text-center">{t.Delete.title}</p>
          <p className="text-center font-semibold text-gray-500">
            {t.Delete.desc}
          </p>

          <div className="flex gap-5">
            <button
              onClick={deletebooking}
              className="w-[120px] h-[50px] bg-[#7b57ff] transition duration-200 border-none text-gray-100 cursor-pointer font-semibold text-base rounded-full hover:bg-[#9173ff]"
            >
              {deleteLoading ? (
                <>
                  <ClipLoader color="#ffffff" />
                </>
              ) : (
                <>
                  <span className="relative z-10 ">{t.Delete.button}</span>
                </>
              )}
            </button>
            <button
              onClick={goback}
              className="w-[120px] h-[50px] bg-gray-300 transition duration-200 text-gray-800 border-none cursor-pointer font-semibold text-base rounded-full hover:bg-gray-200"
            >
              {t.Delete.button2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
