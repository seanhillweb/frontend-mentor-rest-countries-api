"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function FormFilter({ className, handleInput }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleInput(data.filter);
  };

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      aria-label="Filter"
    >
      <div className="relative">
        <select
          {...register("filter")}
          id="filter"
          name="filter"
          className={`w-full rounded-md py-[18px] pl-[18px] pr-[72px] text-sm leading-none shadow-md focus:ring-transparent ${
            errors.filter
              ? "border-red-500 hover:border-red-500 focus:border-red-500"
              : "border-transparent bg-white placeholder:text-brand-darker-blue dark:bg-brand-darker-blue dark:placeholder:text-brand-light-gray"
          }`}
          aria-invalid={errors.filter ? "true" : "false"}
          defaultValue={""}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ErrorMessage
        errors={errors}
        name="filter"
        render={({ message }) => (
          <p role="alert" className="mt-1 text-sm italic text-red-500">
            {message}
          </p>
        )}
      />
    </form>
  );
}
