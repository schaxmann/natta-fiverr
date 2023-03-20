import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const DigitSchema = new mongoose.Schema({
  phoneNumber: String,
});

export default mongoose.models.Digit || mongoose.model("Digit", DigitSchema);
