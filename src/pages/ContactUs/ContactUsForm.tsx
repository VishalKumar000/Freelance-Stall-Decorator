//@ts-nocheck

"use client";

import styles from "./contactus.module.css";
import { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState<null | {
    success?: boolean;
    message?: string;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setErrMsg(null);

      const _formData = new FormData();
      for (const key in formData) {
        _formData.append(key, formData[key]);
      }

      await fetch("/api/contact", {
        method: "POST",
        body: _formData,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrMsg({ success: false, message: "Something Went Wrong" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1>
          Write A <span className={styles.highlight}>Comment</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit} method="post">
          <div className={styles.row}>
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
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
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              required
              onChange={handleChange}
            ></textarea>
          </div>
          {errMsg && (
            <p
              className={errMsg?.success ? "text-[#9dff00]" : "text-[#ff0000]"}
            >
              {errMsg?.message}
            </p>
          )}
          <div className={styles.actions}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Send"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
