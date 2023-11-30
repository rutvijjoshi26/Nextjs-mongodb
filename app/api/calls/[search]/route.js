import { connectdb } from "../../../../dbconfig/dbconfig";
import Calls from "../../../../models/Callsmodel";
import { NextResponse } from "next/server";
import { Store } from "../../../../store/store";

connectdb();

export async function GET(request, { params: { search = "" } }) {
  try {
    let query = {};

    if (search) {
      query = {
        $or: [
          { phoneNumber: { $regex: search, $options: "i" } },
          { campaignName: { $regex: search, $options: "i" } },
          { status: { $in: [search] } },
        ],
      };
    }

    const calls = await Calls.find(query);

    if (!calls || calls.length === 0) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    Store.getState().change_calls(calls);

    return NextResponse.json({
      calls: calls,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
