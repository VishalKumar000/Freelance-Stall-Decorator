"use server";

import { z } from "zod";
import validator from "validator";
import { revalidatePath } from "next/cache";

export async function handleContactSubmit(prevState: any, formData: FormData) {
  try {
    const schema = z.object({
      name: z
        .string()
        .min(1, { message: "Name must be at least 1 character long." }),
      email: z
        .string()
        .min(1, { message: "Please provide your email address." })
        .email("Please enter a valid email address."),
      // phone: z.string(),
      phone: z.string().refine(validator.isMobilePhone, {
        message: "Please enter a valid mobile phone number.",
      }),
      // message: z.string(),
      message: z.string().min(1, {
        message: "Please provide a message at least 1 character long.",
      }),
    });

    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });

    console.log(data);
    data.phone = data.phone.replace(/\D/g, "");

    // Fetch call
    const res = fetch(
      "https://script.google.com/macros/s/AKfycbzj6zB4MnkyVJ2vtU_SCVp7iSy-CejV7DnMnAhjdoFluSQ6VJXogMkCgg3uJJV9xHL5IQ/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    revalidatePath("/contact-us", "layout");

    formData.delete("name");
    formData.delete("email");
    formData.delete("phone");
    formData.delete("message");

    console.log("result");
    return {
      success: true,
      message: "Thank you! Your form has been successfully submitted.",
      random: Math.random() * 1000,
    };
  } catch (error) {
    // console.log(error);
    return {
      success: false,
      message: "Failed to submit contact form",
      random: Math.random() * 100,
    };
  }
}
