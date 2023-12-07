import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json({ status: "SUCCESS", time: new Date() });
};
