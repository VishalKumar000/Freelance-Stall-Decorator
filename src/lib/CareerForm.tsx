"use server";

import { z } from "zod";
import validator from "validator";
import { revalidatePath } from "next/cache";

export async function handleCareerSubmit(prevState: any, formData: FormData) {
  try {
    const schema = z.object({
      name: z
        .string()
        .min(1, { message: "Name must be at least 1 character long." }),
      email: z
        .string()
        .min(1, { message: "Please provide your email address." })
        .email("Please enter a valid email address."),
      phone: z.string(),
      // phone: z.string().refine(validator.isMobilePhone, {
      //   message: "Please enter a valid mobile phone number.",
      // }),
      message: z.string(),
      // message: z.string().min(1, {
      //   message: "Please provide a message at least 1 character long.",
      // }),
      // resume: z
      //   .any()
      //   .refine((files) => files?.length == 1, "Resume is required."),
      resume: z.any(),
    });

    const phone = formData.get("phone")?.toString().replace(/\D/g, "");

    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: phone,
      message: formData.get("message"),
      resume: formData.get("resume"),
    });

    console.log(data);

    if (!data.resume) {
      return {
        success: false,
        message: "Resume is required.",
        random: Math.random() * 100,
      };
    }

    const res = await fetch("http://localhost:3000/api/career", {
      method: "POST",
      body: formData,
    });

    revalidatePath("/contact-us", "layout");

    formData.delete("name");
    formData.delete("email");
    formData.delete("phone");
    formData.delete("message");
    formData.delete("pdf");

    console.log("result");
    return {
      success: true,
      message: "Thank you! Your form has been successfully submitted.",
      random: Math.random() * 1000,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to submit Resume",
      random: Math.random() * 100,
    };
  }
}
