import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// const filsonSoft = localFont({
//   src: [
//     {
//       path: "../font/Filsonsoft-light.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../font/Filsonsoft-regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../font/Filsonsoft-medium.otf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../font/Filsonsoft-bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../font/Filsonsoft-black.otf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yah Acqua Park",
  description: "Parque Aquático",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="scroll-smooth">
        <GoogleTagManager gtmId="GTM-THD2FT4Z" />
        <body className={`${poppins.className} antialiased`}>{children}</body>
        <GoogleAnalytics gaId="G-PEZGDN4YE3" />
      </html>
    </>
  );
}
