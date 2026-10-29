import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Contact | Ambuluwawa Biodiversity Complex",
  description: "Contact Ambuluwawa Biodiversity Complex, Gampola. +94 71 272 4724, Info@ambuluwawa.com.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="Questions before you visit? We're glad to help."
        image="/images/morning-hills.jpg"
        position="center 25%"
      />
      <FeedbackForm />
    </SiteShell>
  );
}
