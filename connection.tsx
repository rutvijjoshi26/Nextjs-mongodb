import mongoose, { Model } from "mongoose";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // OUR TODO SCHEMA
  const CallSchema = new mongoose.Schema({
    phoneNumber: String,
    campaignName: String,
    status: String,
    createdDateTime: {
      type: Date,
      default: Date.now,
    },
  });

  // OUR TODO MODEL
  const Calls = mongoose.models.Calls || mongoose.model("Calls", CallSchema);

  return { conn, Calls };
};
