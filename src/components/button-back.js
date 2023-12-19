"use client";

import { useRouter } from "next/navigation";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

export const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="dark:bg-brand-darker-blue text-brand-darker-blue dark:text-brand-light-gray flex items-center gap-2 rounded-md border-transparent bg-white py-[8px] pl-[30px] pr-[40px] leading-none shadow-md transition-transform duration-75 ease-in-out hover:scale-105 hover:shadow-xl focus:ring-transparent"
    >
      <ArrowLongLeftIcon className="h-6 w-6" />
      Back
    </button>
  );
};
