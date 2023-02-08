import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const RoomSchema = new mongoose.Schema({
  status: String,
  currentQ: { type: String, default: "none" },
});

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
