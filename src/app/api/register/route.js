import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { success: true, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Registration failed" },
      { status: 400 }
    );
  }
}
