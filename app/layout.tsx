import type { Metadata } from "next";
import { Geist, Geist_Mono, Fleur_De_Leah } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fleur = Fleur_De_Leah({
  variable: "--font-fleur",
  weight: "400",
});

const baseURL = process.env.BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  title: {
    default: "Essencia - The Essence of Wellness",
    template: "%s | Essencia",
  },
  description:
    "Essencia offers premium essential oils, scented candles, and oil diffusers made from the highest quality natural ingredients. Experience tranquility and well-being with our curated collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${fleur.variable} antialiased`}
        >
          <main className="w-screen h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
