import { ThemeSwitch } from "@/components/theme-switch";

export default function Header() {
  return (
    <header className="dark:bg-brand-darker-blue bg-white py-6 shadow-sm">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-base font-bold md:text-xl lg:text-2xl">
            Where in the world?
            <span className="sr-only">Countries API Application</span>
          </h1>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
