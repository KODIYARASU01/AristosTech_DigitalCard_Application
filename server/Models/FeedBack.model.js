import mongoose from "mongoose";

let feebackSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  userName: {
    type: String,
    required: true,
  },
  userFeedback: {
    type: String,
    required: true,
  },
  currentRatting: {
    type: Number,
  },
});

let feedBackMessage = mongoose.model("feedBackMessage", feebackSchema);

export default feedBackMessage;
