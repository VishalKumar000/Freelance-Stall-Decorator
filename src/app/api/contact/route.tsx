import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler() {
  return NextResponse.json({ asdf: "asdf" });
}
