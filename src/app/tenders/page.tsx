import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import TendersSection from "@/components/TendersSection";

export const metadata: Metadata = {
  title: "Tenders | Ambuluwawa Biodiversity Complex",
  description: "Official tenders and requests for quotation from the Ambuluwawa Biodiversity Complex Trust Fund.",
};

export default function TendersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Official Notices"
        title="Tenders"
        subtitle="Opportunities to grow with the sanctuary."
        image="/images/morning-lake.jpg"
        position="center 55%"
      />
      <TendersSection />
    </SiteShell>
  );
}
