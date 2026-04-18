import type { Metadata } from "next";

import { AccountProvider } from "@/components/account-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "FORE MVP",
  description: "ForeSeen Protocol MVP for prediction markets on Solana."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AccountProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AccountProvider>
      </body>
    </html>
  );
}

