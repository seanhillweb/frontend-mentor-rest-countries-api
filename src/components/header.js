import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="dark:bg-brand-darker-blue bg-white py-6 shadow-sm"
      aria-label="Header"
    >
      <div className="mx-auto max-w-[1352px] px-[13px] md:px-[26px] lg:px-[38px]">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <h1 className="text-base font-bold md:text-xl lg:text-2xl">
              Where in the world?
              <span className="sr-only">Countries API Application</span>
            </h1>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
