import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { AosInit } from "@/components/aos";

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
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Yah Acqua Park",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://www.yahacquapark.com.br/BANNER-MOBILE-NOVO.png",
    siteName: "Yah Acqua Park",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.yahacquapark.com.br/BANNER-MOBILE-NOVO.png",
        width: 1200,
        height: 630,
        alt: "Yah Acqua Park",
      },
    ],
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
        <body className={`${poppins.className} antialiased`}>
          {children}
          <Analytics />
          <AosInit />
        </body>
        <GoogleAnalytics gaId="G-PEZGDN4YE3" />
      </html>
    </>
  );
}
