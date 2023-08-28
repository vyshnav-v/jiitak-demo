import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortUrl: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", UrlSchema);
export default URL;
