import Navbar from "@/components/user/layout/navbar";
import Footer from "@/components/user/layout/footer";
import { ThemeProviders } from "../theme-provider";
import type { Metadata } from "next";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='../../../public/favicon.ico' sizes='any' />
      </head>
      <body
        className={`bg-light text-black dark:bg-dark dark:text-white transition-colors`}
      >
        <ThemeProviders>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
