//@ts-nocheck

"use client";

import styles from "./contactus.module.css";

import CareerFormSubmit from "./CareerFormSubmit";
import { useFormState } from "react-dom";
import { handleContactSubmit } from "@/lib/ContactForm";
import { useEffect, useRef } from "react";

export default function ContactUsForm() {
  const [state, formAction] = useFormState(handleContactSubmit, {
    message: null,
    success: false,
    random: Math.random(),
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) formRef.current.reset();
  }, [state.random]);

  return (
    <>
      <header className={styles.header}>
        <h1>
          Write A <span className={styles.highlight}>Comment</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form ref={formRef} className={styles.form} action={formAction}>
          <div className={styles.row}>
            <div>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10,14}"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} required></textarea>
          </div>
          {state.message && (
            <p className={state.success ? "text-[#9dff00]" : "text-red-500"}>
              {state.message}
            </p>
          )}
          <div className={styles.actions}>
            <CareerFormSubmit />
          </div>
        </form>
      </main>
    </>
  );
}
