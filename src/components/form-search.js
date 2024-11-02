"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function FormSearch({ className, handleInput }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    handleInput(data.search);
  };

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      aria-label="Search"
    >
      <div className="relative">
        <div className="absolute left-[28px] top-1/2 block h-[18px] w-[18px] -translate-y-1/2">
          <MagnifyingGlassIcon />
        </div>
        <input
          {...register("search")}
          id="search"
          name="search"
          placeholder="Search for a country..."
          className={`w-full rounded-md py-[18px] pl-[72px] pr-[18px] text-sm leading-none shadow-md focus:ring-transparent ${
            errors.search
              ? "border-red-500 hover:border-red-500 focus:border-red-500"
              : "border-transparent bg-white placeholder:text-brand-darker-blue dark:bg-brand-darker-blue dark:placeholder:text-brand-light-gray"
          }`}
          aria-invalid={errors.search ? "true" : "false"}
        />
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
