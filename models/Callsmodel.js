import mongoose from "mongoose";

const CallsSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
  },
  campaignName: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Calls = mongoose.models.calls || mongoose.model("calls", CallsSchema);

export default Calls;
