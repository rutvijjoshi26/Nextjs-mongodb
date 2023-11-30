import { connectdb } from "../../../dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Calls from "../../../models/Callsmodel";
import { Store } from "../../../store/store";

connectdb();
export async function GET() {
  try {
    const calls = await Calls.find();

    if (!calls.length) {
      return NextResponse.json(
        { message: "No Call logs found" },
        { status: 404 }
      );
    }

    Store.getState().change_calls(calls);

    return NextResponse.json({
      calls: calls,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
