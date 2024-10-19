// import { NextResponse } from "next/server";
// import clientPromise from "../../../lib/mongodb";

// export async function POST(request) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("taxi_survey");
//     const {
//       overallRating,
//       professionalism,
//       kindnessRating,
//       drivingSkillsRating,
//       navigationRating,
//       pricingRating,
//       comments,
//     } = await request.json();

//     const result = await db.collection("surveys").insertOne({
//       overallRating,
//       professionalism,
//       kindnessRating,
//       drivingSkillsRating,
//       navigationRating,
//       pricingRating,
//       comments,
//       submittedAt: new Date(),
//     });

//     return NextResponse.json({ success: true, id: result.insertedId });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "An error occurred while submitting the survey.",
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import dbConnect from "@/app/lib/dbConnect";
import Survey from "@/app/models/Feedback";

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const body = await request.json();
    const survey = await Survey.create({ ...body, userId: session.user.id });
    return NextResponse.json({ success: true, data: survey }, { status: 201 });
  } catch (error) {
    console.error("Error submitting survey:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit survey" },
      { status: 500 }
    );
  }
}
