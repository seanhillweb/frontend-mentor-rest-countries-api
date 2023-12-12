"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const allRestCountriesUrl = "https://restcountries.com/v3.1/all";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isAllCountires, setIsAllCountries] = useState([]);

  console.log(isAllCountires);

  const generateCountries = async () => {
    try {
      const response = await axios.get(allRestCountriesUrl);
      setIsAllCountries(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateCountries();
  }, []);

  return (
    <main className="py-8" aria-label="Content">
      <div className="container">
        <h2>Search</h2>
        <h2>Countries List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-4 items-stretch gap-8">
            {isAllCountires.map((country, index) => (
              <li key={index}>
                <div className="flex-column dark:bg-brand-darker-blue flex h-full overflow-hidden rounded-lg bg-white shadow-sm">
                  <div>
                    {/* <Image
                      src={country.flags.png}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-extrabold">
                      {country.name.common}
                    </h3>
                    <p className="mb-1 text-sm">
                      <span className="font-semibold">Population:</span>{" "}
                      {country.population}
                    </p>
                    <p className="mb-1 text-sm">
                      <span className="font-semibold">Region:</span>{" "}
                      {country.region}
                    </p>
                    <p className="mb-1 text-sm">
                      <span className="font-semibold">Capital:</span>{" "}
                      {country.capital}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
