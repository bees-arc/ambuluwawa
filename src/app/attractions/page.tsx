import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ExperiencesGrid from "@/components/ExperiencesGrid";

export const metadata: Metadata = {
  title: "Attractions | Ambuluwawa Biodiversity Complex",
  description: "Java Lounge, Adventure Park, Pinewood Restaurant, souvenir shop and the spiral tower at Ambuluwawa.",
};

export default function AttractionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Attractions & Experiences"
        title="Attractions"
        subtitle="Slow mornings, mountain coffee and adventure above the mist."
        image="/images/morning-hills.jpg"
        position="center 60%"
      />
      <ExperiencesGrid />
    </SiteShell>
  );
}
