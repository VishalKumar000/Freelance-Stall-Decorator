//@ts-nocheck

"use client";

import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const PDFPicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          id={name}
          accept=".pdf"
          name={name}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
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
    </div>
  );
};

export default PDFPicker;
