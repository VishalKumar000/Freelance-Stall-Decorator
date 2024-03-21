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

    const resumeFile = body.resume;
    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());

    await transport.sendMail({
      from: NEXT_PUBLIC_PERSONAL_EMAIL,
      // to: "yadav11adu@gmail.com, mruniquedecoration@gmail.com",
      to: "yadav11adu@gmail.com",
      subject: "MR Unique Decoration: Job Application " + body.email,
      html: emailContent,
      attachments: [
        {
          filename: resumeFile.name,
          content: fileBuffer,
        },
      ],
    });
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
