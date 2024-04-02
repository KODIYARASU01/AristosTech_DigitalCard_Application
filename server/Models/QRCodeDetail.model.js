import mongoose from "mongoose";

let QRCodeDetailSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    QRCodeImage: {
      type:String,
      required:true
    }

  },
  { timestamps: true }
);

let QRCodeDetails = mongoose.model("QRCodeDetails", QRCodeDetailSchema);

export default QRCodeDetails;
