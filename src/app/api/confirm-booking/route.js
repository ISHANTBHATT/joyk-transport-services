import Booking from "@/app/models/Booking";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import User from "@/app/models/user";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get("bookingId");

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return NextResponse.json(
        { success: false, message: "Invalid booking ID" },
        { status: 400 }
      );
    }

    // Find the booking by ID and update bookingConfirmed to true
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { bookingConfirmed: true },
      { new: true }
    );

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    const user = await User.findById(booking.userId);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    await transporter.sendMail({
      from: email,
      to: user.email, // Assuming booking has userEmail
      subject: "Your Booking is Confirmed",
      // text: `Hello ${booking.username},\n\nYour booking has been successfully confirmed!\n\nBooking Details:\nPickup: ${booking.pickup}\nDropoff: ${booking.dropoff}\nPassengers: ${booking.passengers}\nCars: ${booking.cars}\nDate: ${new Date(booking.date).toLocaleDateString()}\nTime: ${booking.time}\nPrice: $${booking.price}\n\nThank you for choosing us!`,
      // Optional: HTML format
      html: `<p>Hello ${user.name},</p>
               <p>Your booking has been successfully confirmed!</p>
               <p><strong>Booking Details:</strong></p>
               <ul>
                 <li><strong>Pickup:</strong> ${booking.pickup}</li>
                 <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
                 <li><strong>Passengers:</strong> ${booking.passengers}</li>
                 <li><strong>Cars:</strong> ${booking.cars}</li>
                 <li><strong>Date:</strong> ${new Date(
                   booking.date
                 ).toLocaleDateString()}</li>
                 <li><strong>Time:</strong> ${booking.time}</li>
                 <li><strong>Price:</strong> $${booking.price}</li>
                         ${
                           booking.returnTrip
                             ? `<li><strong>Return Date:</strong> ${new Date(
                                 booking.returnDate
                               ).toLocaleString()}</li>`
                             : ""
                         }
               </ul>
               <p>Thank you for choosing us!</p>`,
    });

    return NextResponse.json({
      success: true,
      message: "Booking confirmed and email sent to the user",
      booking,
    });
  } catch (error) {
    console.error("Error confirming booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to confirm booking" },
      { status: 500 }
    );
  }
}
