import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    let body: any = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });
    const { NEXT_PUBLIC_PERSONAL_EMAIL, NEXT_PUBLIC_EMAIL_PASSWORD } =
      process.env;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: NEXT_PUBLIC_PERSONAL_EMAIL,
        pass: NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });
    const testResult = await transport.verify();
    if (!testResult) throw new Error("Not verified user");

    let emailContent = "<div>";
    for (const [key, value] of Object.entries(body)) {
      if (
        key !== "resume" &&
        key !== "$ACTION_REF_1" &&
        key !== "$ACTION_KEY" &&
        key !== "$ACTION_1:1" &&
        key !== "$ACTION_1:0"
      )
        emailContent += `<div><strong>${key}:</strong> ${value}</div>`;
    }
    emailContent += "</div>";

    const base64Data = body.resume.split("data:application/pdf;base64,").pop();
    const fileBuffer = Buffer.from(base64Data, "base64");

    await transport.sendMail({
      from: NEXT_PUBLIC_PERSONAL_EMAIL,
      // to: "yadav11adu@gmail.com, mruniquedecoration@gmail.com",
      to: "yadav11adu@gmail.com",
      subject: "MR Unique Decoration: Job Application " + body.email,
      html: emailContent,
      attachments: [
        {
          filename: "resume.pdf",
          content: fileBuffer,
        },
      ],
    });

    // https://script.google.com/macros/s/AKfycbw1dkyd3Vo26FoU5TzHd87mDQCR8KVi6_fqfrqu44eAozrwqmd89M5pnHxQYcMYKxnUrA/exec
    // AKfycbyP-a-5w1deKt2F9k80s8Zb6cX4IWFE7Y19Z6Ll_kywsL_rvcM3FfAOVsQQf2dG0mLIEQ
    await fetch(
      "https://script.google.com/macros/s/AKfycbyP-a-5w1deKt2F9k80s8Zb6cX4IWFE7Y19Z6Ll_kywsL_rvcM3FfAOVsQQf2dG0mLIEQ/exec",
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    return NextResponse.json({ success: true, message: body.email });
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: "Please try again after some time",
      },
      {
        status: 500,
      }
    );
  }
}
