//@ts-nocheck

"use client";

import styles from "./page.module.css";
import PDFPicker from "./PDFPicker";
import { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });
  const [errMsg, setErrMsg] = useState<null | {
    success?: boolean;
    message?: string;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pickedFileName, setPickedFileName] = useState();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeChange = (e: any) => {
    try {
      e.preventDefault();
      const file = e.target.files[0];

      if (!file) return;
      if (file.size > 307200)
        throw new Error("File size should be less than 300KB");

      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setFormData({
          ...formData,
          [e.target.name]: fileReader.result,
        });
        setPickedFileName(file.name);
      };

      fileReader.readAsDataURL(file);
    } catch (error) {
      setErrMsg({ success: false, message: error.message });
    }
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

      await fetch("/api/career", {
        method: "POST",
        body: _formData,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
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
          Share your <span className={styles.highlight}>Resume</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form} method="post" onSubmit={handleSubmit}>
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
              type="text"
              id="phone"
              name="phone"
              required
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
            />
          </div>
          <PDFPicker
            label={"Resume"}
            name={"resume"}
            pickedFileName={pickedFileName}
            handleResumeChange={handleResumeChange}
          />
          {errMsg && (
            <p
              className={errMsg?.success ? "text-[#9dff00]" : "text-[#ff0000]"}
            >
              {errMsg?.message}
            </p>
          )}
          <div className={styles.actions}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Share Resume"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
