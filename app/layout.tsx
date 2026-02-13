import type { Metadata } from "next";
import { Alegreya, IBM_Plex_Sans } from "next/font/google";

import { App } from "@/app";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin", "cyrillic"],
});

const ibmSans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Wishes",
    template: "%s | Wishes",
  },
  description: "Сохрани и поделись своим вишлистом",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${alegreya.variable} ${ibmSans.variable} antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
