"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { ButtonBack } from "@/components/button-back";
import Link from "next/link";

const countryUrl = "https://restcountries.com/v3.1/alpha/";

export default function CountryDetail({ params }) {
  const [loading, setLoading] = useState(true);
  const [isCountry, setIsCountry] = useState({});
  const [isBorderCountry, setIsBorderCountry] = useState([]);

  console.log(isCountry);
  console.log(isBorderCountry);

  const generateCountry = async () => {
    try {
      const response = await axios.get(`${countryUrl}/${params.code}`);
      setIsCountry(response.data[0]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const generateBorderCountry = async () => {
    try {
      const response = await axios.get(`${countryUrl}/${params.code}`);
      response.data[0].borders?.map(async (item) => {
        const responseBorder = await axios.get(`${countryUrl}/${item}`);
        setIsBorderCountry((value) => [
          ...value,
          responseBorder.data[0].cca2.toLowerCase(),
        ]);
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateCountry();
    generateBorderCountry();
  }, []);

  return (
    <main className="py-20" aria-label="Content">
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        <div className="mb-20">
          <ButtonBack />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col items-center gap-20 md:flex-row">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={isCountry.flags.svg}
                alt={isCountry.name.common + ` country flag`}
                fill={true}
                className="w-auto object-contain"
              />
            </div>
            <div className="flex w-full flex-col">
              <h2 className="mb-8 text-3xl font-extrabold">
                {isCountry.name.common}
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <p>
                  <span className="font-semibold">Native Name(s):</span>{" "}
                  {Object.values(isCountry.name.nativeName)
                    .map((value) => value.common)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Top Level Domain(s):</span>{" "}
                  {Object.values(isCountry.tld)
                    .map((value) => value)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {Number(isCountry.population).toLocaleString("en")}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {Object.values(isCountry.currencies)
                    .map((value) => value.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {isCountry.region}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {Object.values(isCountry.languages)
                    .map((value) => value)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {isCountry.subregion ? isCountry.subregion : "N/A"}
                </p>
                <p className="col-span-2">
                  <span className="font-semibold">Capital:</span>{" "}
                  {isCountry.capital ? isCountry.capital : "N/A"}
                </p>
              </div>
              {isCountry?.borders && (
                <nav
                  className="mt-16 flex flex-row items-center gap-4"
                  aria-label="Border countries"
                >
                  <span className="font-semibold">Border Countries:</span>
                  {isBorderCountry?.map((value, index) => (
                    <Link key={index} href={`/country/${value}`}>
                      {value}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
