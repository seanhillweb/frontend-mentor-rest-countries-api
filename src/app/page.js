"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import FormSearch from "@/components/form-search";
import FormFilter from "@/components/form-filter";

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
    <main className="py-12" aria-label="Content">
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        <h2 className="sr-only">Search and Filter</h2>
        <div className="mb-12 flex flex-row justify-between">
          <FormSearch className="w-full max-w-[480px]" />
          <FormFilter />
        </div>
        <h2 className="sr-only">Countries</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 items-stretch gap-[26px] sm:grid-cols-2 sm:gap-[38px] md:grid-cols-3 md:gap-[57px] lg:grid-cols-4 lg:gap-[76px]">
            {isAllCountires.map((country, index) => {
              const name = country.name.common;
              const population = Number(country.population).toLocaleString(
                "en"
              );
              const region = country.region;
              const capital = country.capital;
              const flag = country.flags.png;
              const key = country.name.common
                .replace(/\s+/g, "-")
                .toLowerCase();
              return (
                <li key={index}>
                  <div className="dark:bg-brand-darker-blue flex h-full flex-col overflow-hidden rounded-md bg-white shadow-sm">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={flag}
                        width={320}
                        height={180}
                        alt={name + `country flag`}
                        className="absolute h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-extrabold">{name}</h3>
                      <p className="mb-1 text-sm">
                        <span className="font-semibold">Population:</span>{" "}
                        {population}
                      </p>
                      <p className="mb-1 text-sm">
                        <span className="font-semibold">Region:</span> {region}
                      </p>
                      <p className="mb-1 text-sm">
                        <span className="font-semibold">Capital:</span>{" "}
                        {capital}
                      </p>
                      <p>
                        <Link href={`/country/${key}`}>View</Link>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
