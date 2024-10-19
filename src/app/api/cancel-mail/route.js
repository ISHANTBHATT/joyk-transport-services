import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export async function POST(request) {
  try {
    const { booking, userEmail, userName, phone } = await request.json();

    const formattedDate = new Date(booking.date).toDateString();
    const returnDate = booking.returnTrip
      ? `\nReturn Date: ${new Date(booking.returnDate).toLocaleString()}`
      : "";
    // Send confirmation email to the user
    await transporter.sendMail({
      from: email,
      to: email,
      subject: "Booking Cancel",
      // text: `Hello ${userName},\n\nYour booking details are sent to the company. When it gets confirmed, you will be notified.\n\nBooking Details:\nPickup: ${booking.pickup}\nDropoff: ${booking.dropoff}\nPassengers: ${booking.passengers}\nCars: ${booking.cars}\nDate: ${formattedDate}\nTime: ${booking.time}\nPrice: $${booking.price} ${returnDate} \n\nThank you for booking with us!`,
      html: `<p>Dear Admin,</p>
      <p>${userName}, Cancel the ride.</p>
      <p><strong>User Information:</strong></p>
      <ul>
      <li><strong>Name:</strong> ${userName}</li>
      <li><strong>EMail:</strong> ${userEmail}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <p><strong>Booking Details:</strong></p>
      <ul>
        <li><strong>Pickup:</strong> ${booking.pickup}</li>
        <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
        <li><strong>Passengers:</strong> ${booking.passengers}</li>
        <li><strong>Cars:</strong> ${booking.cars}</li>
        <li><strong>Date:</strong> ${formattedDate} </li>
        <li><strong>Time:</strong> ${booking.time}</li>
        <li><strong>Vehicle Type:</strong> ${booking.vehicleType}</li>
        <li><strong>Price:</strong> $${booking.price}</li>
        ${
          booking.returnTrip
            ? `<li><strong>Return Date:</strong> ${new Date(
                booking.returnDate
              ).toDateString()}</li>
              <li><strong>Return Time:</strong> ${booking.returnTime}</li>`
            : ""
        }
        
      </ul>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
