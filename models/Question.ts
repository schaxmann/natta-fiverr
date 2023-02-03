import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const QuestionSchema = new mongoose.Schema({
  question: String,
});

export default mongoose.models.Question ||
  mongoose.model("Question", QuestionSchema);
