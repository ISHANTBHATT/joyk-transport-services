import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  passengers: { type: Number, required: true },
  cars: { type: Number, default: 1 },
  returnTrip: { type: Boolean, default: false },
  returnDate: { type: Date },
  returnTime: { type: String },
  price: { type: Number, required: true },
  bookingConfirmed: { type: Boolean, default: false },
  vehicleType: { type: String, required: true },
  flight: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
