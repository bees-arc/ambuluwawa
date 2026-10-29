import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import OpeningInfoSection from "@/components/OpeningInfoSection";
import DistanceCalculator from "@/components/DistanceCalculator";

export const metadata: Metadata = {
  title: "Plan Your Visit | Ambuluwawa Biodiversity Complex",
  description: "Opening hours, tickets, directions and travel times to Ambuluwawa from Kandy, Colombo and more.",
};

export default function PlanYourVisitPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tickets, Hours & Routes"
        title="Plan Your Visit"
        subtitle="Open 365 days, from first light at 07:30 AM."
        image="/images/morning-tea.jpg"
        position="center 55%"
      />
      <OpeningInfoSection />
      <DistanceCalculator />
    </SiteShell>
  );
}
