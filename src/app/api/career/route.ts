import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.formData();
  console.log(body);
  return NextResponse.json({ success: true });
}
