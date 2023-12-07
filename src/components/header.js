import { ThemeSwitch } from "@/components/theme-switch";

export default function Header() {
  return (
    <header className="dark:bg-brand-darker-blue bg-white py-6 shadow-sm">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Where in the world?</h1>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
