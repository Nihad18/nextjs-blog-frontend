import type { Metadata } from "next";
//style files
import "@/assets/styles/globals.css";
//components
import { ThemeProviders } from "../theme-provider";
import Sidebar from "@/components/dashboard/layout/sidebar";
import Navbar from "@/components/dashboard/layout/navbar";
//fonts
import { Inter } from 'next/font/google'
 
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
        className={`${inter.className} text-black dark:text-white bg-light dark:bg-dark transition-colors`}
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
