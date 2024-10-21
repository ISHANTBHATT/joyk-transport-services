//working
// import Booking from "@/app/models/Booking";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import nodemailer from "nodemailer";
// import User from "@/app/models/user";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const bookingId = searchParams.get("bookingId");

//     if (!mongoose.Types.ObjectId.isValid(bookingId)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid booking ID" },
//         { status: 400 }
//       );
//     }

//     // Find the booking by ID and update bookingConfirmed to true
//     const booking = await Booking.findByIdAndUpdate(
//       bookingId,
//       { bookingConfirmed: true },
//       { new: true }
//     );

//     if (!booking) {
//       return NextResponse.json(
//         { success: false, message: "Booking not found" },
//         { status: 404 }
//       );
//     }

//     const user = await User.findById(booking.userId);
//     if (!user) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 404 }
//       );
//     }
//     await transporter.sendMail({
//       from: email,
//       to: user.email, // Assuming booking has userEmail
//       subject: "Your Booking is Confirmed",
//       // text: `Hello ${booking.username},\n\nYour booking has been successfully confirmed!\n\nBooking Details:\nPickup: ${booking.pickup}\nDropoff: ${booking.dropoff}\nPassengers: ${booking.passengers}\nCars: ${booking.cars}\nDate: ${new Date(booking.date).toLocaleDateString()}\nTime: ${booking.time}\nPrice: $${booking.price}\n\nThank you for choosing us!`,
//       // Optional: HTML format
//       html: `<p>Hello ${user.name},</p>
//                <p>Your booking has been successfully confirmed!</p>
//                <p><strong>Booking Details:</strong></p>
//                <ul>
//                  <li><strong>Pickup:</strong> ${booking.pickup}</li>
//                  <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
//                  <li><strong>Passengers:</strong> ${booking.passengers}</li>
//                  <li><strong>Cars:</strong> ${booking.cars}</li>
//                  <li><strong>Date:</strong> ${new Date(
//                    booking.date
//                  ).toLocaleDateString()}</li>
//                  <li><strong>Time:</strong> ${booking.time}</li>
//                  <li><strong>Price:</strong> $${booking.price}</li>
//                          ${
//                            booking.returnTrip
//                              ? `<li><strong>Return Date:</strong> ${new Date(
//                                  booking.returnDate
//                                ).toLocaleString()}</li>`
//                              : ""
//                          }
//                </ul>
//                <p>Thank you for choosing us!</p>`,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Booking confirmed and email sent to the user",
//       booking,
//     });
//   } catch (error) {
//     console.error("Error confirming booking:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to confirm booking" },
//       { status: 500 }
//     );
//   }
// }

//working
// import Booking from "@/app/models/Booking";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import nodemailer from "nodemailer";
// import User from "@/app/models/user";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export async function GET(request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const bookingId = searchParams.get("bookingId");

//     if (!mongoose.Types.ObjectId.isValid(bookingId)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid booking ID" },
//         { status: 400 }
//       );
//     }

//     // Find the booking by ID and update bookingConfirmed to true
//     const booking = await Booking.findByIdAndUpdate(
//       bookingId,
//       { bookingConfirmed: true },
//       { new: true }
//     );

//     if (!booking) {
//       return NextResponse.json(
//         { success: false, message: "Booking not found" },
//         { status: 404 }
//       );
//     }

//     const user = await User.findById(booking.userId);
//     if (!user) {
//       return NextResponse.json(
//         { success: false, message: "User not found" },
//         { status: 404 }
//       );
//     }
//     await transporter.sendMail({
//       from: email,
//       to: user.email, // Assuming booking has userEmail
//       subject: "Your Booking is Confirmed",
//       // text: `Hello ${booking.username},\n\nYour booking has been successfully confirmed!\n\nBooking Details:\nPickup: ${booking.pickup}\nDropoff: ${booking.dropoff}\nPassengers: ${booking.passengers}\nCars: ${booking.cars}\nDate: ${new Date(booking.date).toLocaleDateString()}\nTime: ${booking.time}\nPrice: $${booking.price}\n\nThank you for choosing us!`,
//       // Optional: HTML format
//       html: `<p>Hello ${user.name},</p>
//                <p>Your booking has been successfully confirmed!</p>
//                <p><strong>Booking Details:</strong></p>
//                <ul>
//                  <li><strong>Pickup:</strong> ${booking.pickup}</li>
//                  <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
//                  <li><strong>Passengers:</strong> ${booking.passengers}</li>
//                  <li><strong>Cars:</strong> ${booking.cars}</li>
//                  <li><strong>Date:</strong> ${new Date(
//                    booking.date
//                  ).toLocaleDateString()}</li>
//                  <li><strong>Time:</strong> ${booking.time}</li>
//                  <li><strong>Vehicle Type:</strong> ${booking.vehicleType}</li>
//                  <li><strong>Price:</strong> $${booking.price}</li>
//                          ${
//                            booking.returnTrip
//                              ? `<li><strong>Return Date:</strong> ${new Date(
//                                  booking.returnDate
//                                ).toLocaleDateString()}
//                                </li>
//                                <li><strong>Return Time:</strong> ${
//                                  booking.returnTime
//                                }</li>`
//                              : ""
//                          }

//                </ul>
//                <p><strong>Payment can be made after the ride via Cash or by Wave transfer or OrangeMoney transfer.</strong></p>
//                <p>Thank you for choosing us!</p>`,
//     });
//     // return NextResponse.redirect(
//     //   new URL(`/success?bookingId=${bookingId}`, request.url)
//     // );
//     return NextResponse.json({
//       success: true,
//       message: "Booking confirmed and email sent to the user",
//       booking,
//     });
//   } catch (error) {
//     console.error("Error confirming booking:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to confirm booking" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Booking from "@/app/models/Booking";
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
      return new Response("Invalid booking ID", { status: 400 });
    }

    // Find the booking by ID and update bookingConfirmed to true
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { bookingConfirmed: true },
      { new: true }
    );

    if (!booking) {
      return new Response("Booking not found", { status: 404 });
    }

    const user = await User.findById(booking.userId);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Send confirmation email
    await transporter.sendMail({
      from: email,
      to: user.email,
      subject: "Your Booking is Confirmed",
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
               <li><strong>Vehicle Type:</strong> ${booking.vehicleType}</li>
               <li><strong>Price:</strong> $${booking.price}</li>
               ${
                 booking.returnTrip
                   ? `
               <li><strong>Return Date:</strong> ${new Date(
                 booking.returnDate
               ).toLocaleDateString()}</li>
               <li><strong>Return Time:</strong> ${booking.returnTime}</li>
               `
                   : ""
               }
             </ul>
             <p><strong>Payment can be made after the ride via Cash or by Wave transfer or OrangeMoney transfer.</strong></p>
             <p>Thank you for choosing us!</p>`,
    });

    // Generate HTML response
    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #2c3e50; }
          .booking-details { background-color: #f9f9f9; border: 1px solid #ddd; padding: 20px; border-radius: 5px; }
          .success-message { color: #27ae60; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Booking Confirmation</h1>
        <p class="success-message">Your booking has been successfully confirmed!</p>
        <div class="booking-details">
          <h2>Booking Details:</h2>
          <ul>
            <li><strong>Pickup:</strong> ${booking.pickup}</li>
            <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
            <li><strong>Passengers:</strong> ${booking.passengers}</li>
            <li><strong>Cars:</strong> ${booking.cars}</li>
            <li><strong>Date:</strong> ${new Date(
              booking.date
            ).toLocaleDateString()}</li>
            <li><strong>Time:</strong> ${booking.time}</li>
            <li><strong>Vehicle Type:</strong> ${booking.vehicleType}</li>
            <li><strong>Price:</strong> $${booking.price}</li>
            ${
              booking.returnTrip
                ? `
            <li><strong>Return Date:</strong> ${new Date(
              booking.returnDate
            ).toLocaleDateString()}</li>
            <li><strong>Return Time:</strong> ${booking.returnTime}</li>
            `
                : ""
            }
          </ul>
        </div>
        <p><strong>A confirmation email has been sent to user&apos;s registered email address.</strong></p>
      </body>
      </html>
    `;

    return new Response(htmlResponse, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Error confirming booking:", error);
    return new Response("Failed to confirm booking", { status: 500 });
  }
}
