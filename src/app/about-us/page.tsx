"use client";

import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  const fetchData = async () => {
    await fetch("https://catfact.ninja/fact");
  };

  return <div>route</div>;
};

export default AboutUs;
