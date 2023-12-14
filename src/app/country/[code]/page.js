"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Image from "next/image";

const countryUrl = "https://restcountries.com/v3.1/alpha/";

export default function CountryDetail({ params }) {
  const [loading, setLoading] = useState(true);
  const [isCountry, setIsCountry] = useState({});

  const generateCountry = async () => {
    try {
      const response = await axios.get(`${countryUrl}/${params.code}`);
      setIsCountry(response.data[0]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateCountry();
  }, []);

  return (
    <main className="py-12" aria-label="Content">
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <h2>Country Detail Page: {isCountry.name.common}</h2>
        )}
      </div>
    </main>
  );
}
