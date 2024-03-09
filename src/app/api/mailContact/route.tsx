import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as handlebars from "handlebars";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email } = await req.json();
  const { NEXT_PUBLIC_PERSONAL_EMAIL, NEXT_PUBLIC_EMAIL_PASSWORD } =
    process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NEXT_PUBLIC_PERSONAL_EMAIL,
      pass: NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_PERSONAL_EMAIL,
      to: NEXT_PUBLIC_PERSONAL_EMAIL,
      subject: "MRUniqueDecoration: New User Joined " + email,
      html: "New User Register Successfully " + email,
    });
    const sendResult1 = await transport.sendMail({
      from: NEXT_PUBLIC_PERSONAL_EMAIL,
      to: "yadav11adu@gmail.com",
      subject: "MRUniqueDecoration: New User Joined " + email,
      html: "New User Register Successfully " + email,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ email });
}
