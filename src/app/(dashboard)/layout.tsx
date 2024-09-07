//next
import type { Metadata } from "next";
//components
import { ThemeProviders } from "../theme-provider";
import Sidebar from "@/components/dashboard/layout/sidebar";
import Navbar from "@/components/dashboard/layout/navbar";
//fonts
import { Inter } from 'next/font/google'
//style files
import "@/assets/styles/globals.css";
import "@/assets/styles/admin.css";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-black dark:text-white bg-white dark:bg-dark transition-colors`}
      >
        <ThemeProviders>
          <div className='flex w-screen min-h-screen'>
              <Sidebar />
            <div className="w-full">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}