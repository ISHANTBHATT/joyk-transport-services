import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import dbConnect from "@/app/lib/dbConnect";
import Booking from "@/app/models/Booking";

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const { id } = params;
    const booking = await Booking.findOne({ _id: id, userId: session.user.id });

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: booking.toObject(),
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const { id } = params;
    const booking = await Booking.findOne({ _id: id, userId: session.user.id });

    if (!booking) {
      return NextResponse.json(
        { success: false, message: "Booking not found or unauthorized" },
        { status: 404 }
      );
    }

    await Booking.deleteOne({ _id: id });

    return NextResponse.json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
