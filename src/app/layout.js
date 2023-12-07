/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import Script from "next/script";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { AppThemeProvider } from "@/context/app-theme-provider";
import Header from "@/components/header";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Rest Countries API",
  description: "Built with React, Next.js, Typescript, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoSans.className}>
        <AppThemeProvider>
          <Header />
          {children}
        </AppThemeProvider>
      </body>
      <Script src="/static/support-color-mode.js" />
    </html>
  );
}
