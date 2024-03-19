"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const CareerFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Send"}
    </button>
  );
};

export default CareerFormSubmit;
