import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    overallRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    professionalism: {
      type: String,
      required: true,
      enum: ["excellent", "good", "average", "poor", "very-poor"],
    },
    kindnessRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    drivingSkillsRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    navigationRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    pricingRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comments: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Survey || mongoose.model("Survey", SurveySchema);
