import "@/assets/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Core3lab`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
