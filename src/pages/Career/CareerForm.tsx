//@ts-nocheck

"use client";

import styles from "./page.module.css";
import CareerFormSubmit from "./CareerFormSubmit";
import { useFormState } from "react-dom";
import PDFPicker from "./PDFPicker";
import { handleCareerSubmit } from "@/lib/CareerForm";
import { useRef, useEffect } from "react";

export default function CareerForm() {
  const [state, formAction] = useFormState(handleCareerSubmit, {
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
          Share your <span className={styles.highlight}>Resume</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form ref={formRef} className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" required />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} required></textarea>
          </p>
          <PDFPicker label={"Resume"} name={"resume"} />
          {state.message && (
            <p className={state.success ? "text-[#9dff00]" : "text-red-500"}>
              {state.message}
            </p>
          )}
          <p className={styles.actions}>
            <CareerFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
