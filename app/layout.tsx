import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaid Khan Portfolio - Crafting Digital Excellence",
  description:
    "Step into Zaid's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
  
  openGraph: {
    title: "Zaid's Portfolio - Crafting Digital Excellence",
    description:
      "Step into Zaid's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
    url: "https://portfolio25-one.vercel.app",
    siteName: "Zaid khan Portfolio",
    images: [
      {
        url: "https://portfolio25-one.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Zaid khan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid's Portfolio - Crafting Digital Excellence",
    description:
      "Step into Zaid's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
    images: ["https://portfolio25-one.vercel.app/portfolio.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href="https://portfolio25-one.vercel.app" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Zaid Khan Portfolio",
          url: "https://portfolio25-one.vercel.app",
          description:
            "Step into Zaid's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
        }),
          }}
        />
      </Head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
