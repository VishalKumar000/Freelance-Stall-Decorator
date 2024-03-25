//@ts-nocheck

"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";

const PDFPicker = ({
  label,
  value,
  name,
  pickedFileName,
  handleResumeChange,
}) => {
  const imageInputRef = useRef();

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          id={name}
          accept=".pdf"
          name={name}
          value={value}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleResumeChange}
        />
        <div
          className={styles.button}
          onClick={() => {
            imageInputRef.current.click();
          }}
        >
          Pick an PDF
        </div>
      </div>
      {pickedFileName && <p>Selected file: {pickedFileName}</p>}
    </div>
  );
};

export default PDFPicker;
