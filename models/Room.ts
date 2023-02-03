import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const RoomSchema = new mongoose.Schema({
  status: String,
});

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
