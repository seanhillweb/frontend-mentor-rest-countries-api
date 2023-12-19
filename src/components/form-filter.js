"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function FormFilter({ className }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      aria-label="Filter"
    >
      <div className="relative">
        <select
          {...register("filter", { required: "Cannot be blank" })}
          id="filter"
          name="filter"
          className={`w-full rounded-md py-[18px] pl-[18px] pr-[72px] text-sm leading-none shadow-md focus:ring-transparent ${
            errors.search
              ? "border-red-500 hover:border-red-500 focus:border-red-500"
              : "dark:bg-brand-darker-blue placeholder:text-brand-darker-blue dark:placeholder:text-brand-light-gray border-transparent bg-white"
          }`}
          aria-invalid={errors.search ? "true" : "false"}
          defaultValue={""}
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceanic">Oceanic</option>
        </select>
      </div>
      <ErrorMessage
        errors={errors}
        name="search"
        render={({ message }) => (
          <p role="alert" className="mt-1 text-sm italic text-red-500">
            {message}
          </p>
        )}
      />
      <input type="submit" className="hidden" />
    </form>
  );
}
