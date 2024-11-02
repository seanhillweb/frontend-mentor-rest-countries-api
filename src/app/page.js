"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import FormSearch from "@/components/form-search";
import FormFilter from "@/components/form-filter";
import { formatUrl } from "@/utils/format";

const allCountriesUrl = "https://restcountries.com/v3.1/all/";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isAllCountriesData, setIsAllCountriesData] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const [isRegion, setIsRegion] = useState("");

  const generateCountries = async () => {
    try {
      const response = await axios.get(allCountriesUrl);
      console.log(response.data);
      setIsAllCountriesData(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateCountries();
  }, [isSearch, isRegion]);

  return (
    <main className="py-12" aria-label="Content">
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        <h2 className="sr-only">Search and Filter</h2>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row">
          <FormSearch
            className="w-full md:max-w-[480px]"
            handleInput={setIsSearch}
          />
          <FormFilter handleInput={setIsRegion} />
        </div>
        <h2 className="sr-only">Countries</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 items-stretch gap-[26px] sm:grid-cols-2 sm:gap-[38px] md:grid-cols-3 md:gap-[57px] lg:grid-cols-4 lg:gap-[76px]">
            {isAllCountriesData
              .filter((country) => {
                return isSearch.toLowerCase() === ""
                  ? country
                  : country.name.common.toLowerCase().includes(isSearch);
              })
              .filter((country) => {
                return isRegion === ""
                  ? country
                  : country.region.includes(isRegion);
              })
              .map((country, index) => {
                const name = country.name.common;
                const population = Number(country.population).toLocaleString(
                  "en"
                );
                const region = country.region;
                const capital = country.capital;
                const flag = country.flags.svg;
                const alt = country.flags.alt;
                return (
                  <li key={index}>
                    <Link
                      href={`/country/${formatUrl(name)}`}
                      aria-label={`Learn more about ` + name}
                      className="group"
                    >
                      <div className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-md transition-transform duration-75 ease-in-out group-hover:shadow-xl dark:bg-brand-darker-blue md:group-hover:scale-105 lg:group-hover:scale-110">
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={flag}
                            alt={alt ? alt : "N/A"}
                            fill={true}
                            className="absolute h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="mb-3 text-xl font-extrabold group-hover:underline group-focus:underline">
                            {name}
                          </h3>
                          <p className="mb-1 text-sm">
                            <span className="font-semibold">Population:</span>{" "}
                            {population}
                          </p>
                          <p className="mb-1 text-sm">
                            <span className="font-semibold">Region:</span>{" "}
                            {region ? region : "N/A"}
                          </p>
                          <p className="mb-1 text-sm">
                            <span className="font-semibold">Capital:</span>{" "}
                            {capital
                              ? Object.values(capital)
                                  .map((value) => value)
                                  .join(", ")
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </main>
  );
}
