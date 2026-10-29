import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CuratedJournal from "@/components/CuratedJournal";

export const metadata: Metadata = {
  title: "Travel Journal | Ambuluwawa Biodiversity Complex",
  description: "Stories and travel guides from Ambuluwawa and the Kandy highlands.",
};

export default function JournalPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Stories & Guides"
        title="Journal"
        subtitle="Don't let your curiosity go unanswered."
        image="/images/morning-tea.jpg"
        position="center 20%"
      />
      <CuratedJournal />
    </SiteShell>
  );
}
