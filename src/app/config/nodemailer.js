import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

// export const mailOptions = {
//   from: email,
//   to: email,
// };

export const mailOptions = ({ email }) => ({
  from: email,
  to: [email].filter(Boolean).join(","), // This ensures that only non-empty emails are joined
});
