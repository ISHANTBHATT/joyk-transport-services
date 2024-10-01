import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  date: { type: Date, required: true },
  //   time: { type: TimeRanges, required: true },
  passengers: { type: Number, required: true },
  cars: { type: Number, default: 1 },
  returnTrip: { type: Boolean, default: false },
  returnDate: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
