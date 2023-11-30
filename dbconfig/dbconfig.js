import mongoose from "mongoose";

export async function connectdb() {
  try {
    if (!process.env.MONGO_DB_URL) {
      console.error("MONGO_DB_URL is not defined");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_DB_URL);

    mongoose.connection.once("open", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong");
    console.error(error);
    process.exit(1);
  }
}
