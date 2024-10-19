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
    const { userEmail, userName, subject, message } = await request.json();

    await transporter.sendMail({
      from: email,
      to: email,
      subject: `${subject}`,
      html: `<p>Dear Admin,</p>
      <p><strong>User Information:</strong></p>
      <ul>
      <li><strong>Name:</strong> ${userName}</li>
      <li><strong>EMail:</strong> ${userEmail}</li>
      <li><strong>Subject:</strong> ${subject}</li>
      <li><strong>Message:</strong> ${message}</li>
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
