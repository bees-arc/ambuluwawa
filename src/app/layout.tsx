import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambuluwawa Biodiversity Complex | Sri Lanka's Soaring Mountain Sanctuary",
  description:
    "Experience Ambuluwawa Mountain Sanctuary at 3,567 ft. Discover the iconic 55m spiral tower, multi-religious sanctuary, 360° panoramic highland views, pristine nature trails, and mountain dining.",
  keywords: [
    "Ambuluwawa",
    "Ambuluwawa Tower",
    "Ambuluwawa Biodiversity Complex",
    "Gampola Sri Lanka",
    "Sri Lanka Tourism",
    "Spiral Tower Sri Lanka",
    "Ambuluwawa Tickets",
    "Ambuluwawa Opening Hours",
  ],
  authors: [{ name: "Ambuluwawa Biodiversity Complex" }],
  openGraph: {
    title: "Ambuluwawa Biodiversity Complex | Sri Lanka's Iconic Mountain Sanctuary",
    description:
      "Perched at 3,567 feet with breathtaking 360-degree vistas across Sri Lanka's highest peaks. Explore the iconic spiral tower, multi-religious sanctuary, and highland biodiversity.",
    url: "https://ambuluwawa.com",
    siteName: "Ambuluwawa Bio Diversity Complex",
    images: [
      {
        url: "https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg",
        width: 1200,
        height: 630,
        alt: "Ambuluwawa Sanctuary & Tower",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambuluwawa Biodiversity Complex",
    description: "Sri Lanka's premier mountain sanctuary and iconic 360° spiral tower.",
    images: ["https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg"],
  },
  icons: {
    icon: "https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png",
    apple: "https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}>
      <head>
        <link rel="canonical" href="https://ambuluwawa.com/" />
        {/* Structured Data for SEO: TouristAttraction & Place */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Ambuluwawa Bio Diversity Complex",
              description:
                "A truly unique destination in Sri Lanka offering 360-degree breathtaking views, a 55m spiral tower, biodiversity reserve, and a multi-religious sanctuary.",
              url: "https://ambuluwawa.com",
              telephone: "+94 71 272 4724",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gampola",
                addressRegion: "Central Province",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.1706",
                longitude: "80.5367",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:30",
                  closes: "17:30",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FBF9F5] text-[#121820] font-sans selection:bg-[#004495]/20 selection:text-[#001C3D]">
        {children}
      </body>
    </html>
  );
}
