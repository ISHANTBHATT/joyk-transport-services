// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
// const appUrl = process.env.NEXTAUTH_URL;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export async function POST(request) {
//   try {
//     const { dataid, bookingData, userEmail, userName } = await request.json();

//     const formattedDate = new Date(bookingData.date).toLocaleDateString();
//     const returnDate = bookingData.returnTrip
//       ? `\nReturn Date: ${new Date(bookingData.returnDate).toLocaleString()}`
//       : "";
//     // Send confirmation email to the user
//     await transporter.sendMail({
//       from: email,
//       to: userEmail,
//       subject: "Booking Confirmation",
//       // text: `Hello ${userName},\n\nYour booking details are sent to the company. When it gets confirmed, you will be notified.\n\nBooking Details:\nPickup: ${bookingData.pickup}\nDropoff: ${bookingData.dropoff}\nPassengers: ${bookingData.passengers}\nCars: ${bookingData.cars}\nDate: ${formattedDate}\nTime: ${bookingData.time}\nPrice: $${bookingData.price} ${returnDate} \n\nThank you for booking with us!`,
//       html: `<p>Hello ${userName},</p>
//       <p>Your booking details are sent to the company. When it gets confirmed, you will be notified.</p>
//       <p><strong>Booking Details:</strong></p>
//       <ul>
//         <li><strong>Pickup:</strong> ${bookingData.pickup}</li>
//         <li><strong>Dropoff:</strong> ${bookingData.dropoff}</li>
//         <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
//         <li><strong>Cars:</strong> ${bookingData.cars}</li>
//         <li><strong>Date:</strong> ${formattedDate} </li>
//         <li><strong>Time:</strong> ${bookingData.time}</li>
//         <li><strong>Price:</strong> $${bookingData.price}</li>
//         ${
//           bookingData.returnTrip
//             ? `<li><strong>Return Date:</strong> ${new Date(
//                 bookingData.returnDate
//               ).toLocaleString()}</li>`
//             : ""
//         }
//       </ul>
//       <p>Thank you for booking with us!</p>`,
//     });

//     // Send notification email to the admin with the confirmation button
//     const confirmationUrl = `${appUrl}/api/confirm-booking?bookingId=${dataid}`;

//     const adminEmailContent = `
//       <p>Admin,</p>
//       <p>A new ride has been booked.</p>
//       <p><strong>Booking Details:</strong></p>
//       <ul>
//         <li><strong>Username:</strong> ${userName}</li>
//         <li><strong>User Email:</strong> ${userEmail}</li>
//         <li><strong>Pickup:</strong> ${bookingData.pickup}</li>
//         <li><strong>Dropoff:</strong> ${bookingData.dropoff}</li>
//         <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
//         <li><strong>Cars:</strong> ${bookingData.cars}</li>
//         <li><strong>Date:</strong> ${formattedDate} </li>
//         <li><strong>Time:</strong> ${bookingData.time}</li>
//         <li><strong>Price:</strong> $${bookingData.price}</li>
//         ${
//           bookingData.returnTrip
//             ? `<li><strong>Return Date:</strong> ${new Date(
//                 bookingData.returnDate
//               ).toLocaleString()}</li>`
//             : ""
//         }
//       </ul>
//       <p>Please confirm availability for the ride by clicking the button below:</p>
//       <a href="${confirmationUrl}" style="display: inline-block; padding: 10px 20px; color: white; background-color: orange; text-decoration: none; border-radius: 5px;">Confirm Booking</a>
//     `;

//     await transporter.sendMail({
//       from: email,
//       to: email, // Sending to the admin
//       subject: "New Ride Booking",
//       html: adminEmailContent, // Send the HTML content
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const appUrl = process.env.NEXTAUTH_URL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export async function POST(request) {
  try {
    const { dataid, bookingData, userEmail, userName, phone } =
      await request.json();

    const formattedDate = new Date(bookingData.date).toDateString();
    const returnDate = bookingData.returnTrip
      ? `\nReturn Date: ${new Date(bookingData.returnDate).toLocaleString()}`
      : "";
    // Send confirmation email to the user
    await transporter.sendMail({
      from: email,
      to: userEmail,
      subject: "Booking Confirmation",
      // text: `Hello ${userName},\n\nYour booking details are sent to the company. When it gets confirmed, you will be notified.\n\nBooking Details:\nPickup: ${bookingData.pickup}\nDropoff: ${bookingData.dropoff}\nPassengers: ${bookingData.passengers}\nCars: ${bookingData.cars}\nDate: ${formattedDate}\nTime: ${bookingData.time}\nPrice: $${bookingData.price} ${returnDate} \n\nThank you for booking with us!`,
      html: `<p>Hello ${userName},</p>
      <p>Your booking details are sent to the company. When it gets confirmed, you will be notified.</p>
      <p><strong>Booking Details:</strong></p>
      <ul>
        <li><strong>Pickup:</strong> ${bookingData.pickup}</li>
        <li><strong>Dropoff:</strong> ${bookingData.dropoff}</li>
        <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
        <li><strong>Cars:</strong> ${bookingData.cars}</li>
        <li><strong>Date:</strong> ${formattedDate} </li>
        <li><strong>Time:</strong> ${bookingData.time}</li>
        <li><strong>Vehicle Type:</strong> ${bookingData.vehicleType}</li>
        <li><strong>Price:</strong> $${bookingData.price}</li>
        ${
          bookingData.returnTrip
            ? `<li><strong>Return Date:</strong> ${new Date(
                bookingData.returnDate
              ).toDateString()}</li>
              <li><strong>Return Time:</strong> ${bookingData.returnTime}</li>`
            : ""
        }       
        <li><strong>Our WhatsApp:</strong>+221-78 750 79 89</li>
      </ul>

      <p>Thank you for booking with us!</p>`,
    });

    // Send notification email to the admin with the confirmation button
    const confirmationUrl = `${appUrl}/api/confirm-booking?bookingId=${dataid}`;
    const flight = `https://www.flightradar24.com/${bookingData.flight}`;
    const adminEmailContent = `
      <p>Admin,</p>
      <p>A new ride has been booked.</p>
      <p><strong>Booking Details:</strong></p>
      <ul>
        <li><strong>UserName:</strong> ${userName}</li>
        <li><strong>User Email:</strong> ${userEmail}</li>
        <li><strong>Pickup:</strong> ${bookingData.pickup}</li>
        <li><strong>Dropoff:</strong> ${bookingData.dropoff}</li>
        <li><strong>Flight Number: </strong> ${bookingData.flight}</li>
        <li><strong>Track Flight: </strong><a href="${flight}" style="display: inline-block; padding: 1px 20px; color: white; background-color: blue; text-decoration: none; border-radius: 5px;">Click here</a></li>
        <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
        <li><strong>Cars:</strong> ${bookingData.cars}</li>
        <li><strong>Date:</strong> ${formattedDate} </li>
        <li><strong>Time:</strong> ${bookingData.time}</li>
        <li><strong>Vehicle Type:</strong> ${bookingData.vehicleType}</li>
        <li><strong>Price:</strong> $${bookingData.price}</li>
        ${
          bookingData.returnTrip
            ? `<li><strong>Return Date:</strong> ${new Date(
                bookingData.returnDate
              ).toDateString()}</li>
              <li><strong>Return Time:</strong> ${bookingData.returnTime}</li>`
            : ""
        }
        <li><strong>Phone Number:</strong> ${phone}</li>
      </ul>
      <p>Please confirm availability for the ride by clicking the button below:</p>
      <a href="${confirmationUrl}" style="display: inline-block; padding: 10px 20px; color: white; background-color: orange; text-decoration: none; border-radius: 5px;">Confirm Booking</a>
    `;

    await transporter.sendMail({
      from: email,
      to: email, // Sending to the admin
      subject: "New Ride Booking",
      html: adminEmailContent, // Send the HTML content
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
