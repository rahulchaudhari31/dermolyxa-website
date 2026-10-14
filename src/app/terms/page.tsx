import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the Dermolyxa website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="13 October 2026">
      <p>
        These terms govern your use of the Dermolyxa website and our services.
        Please read them carefully. By accessing this website or booking an
        appointment, you agree to be bound by them.
      </p>

      <h2>Services and information</h2>
      <p>
        Dermolyxa provides information about regenerative and aesthetic
        treatments. Content on this website is provided for general information
        only and does not constitute medical advice. See our{" "}
        <a href="/medical-disclaimer">Medical Disclaimer</a>.
      </p>

      <h2>Bookings</h2>
      <p>
        Consultation requests submitted through our website are subject to
        confirmation by our team. We reserve the right to decline or reschedule
        bookings. Prices and treatment plans are confirmed during your
        consultation and may vary based on individual assessment.
      </p>

      <h2>Cancellation policy</h2>
      <p>
        Please provide at least 48 hours&apos; notice to reschedule or cancel an
        appointment. Late cancellations or no-shows may be subject to a fee,
        which will be communicated to you at the time of booking.
      </p>

      <h2>Eligibility</h2>
      <p>
        Our services are intended for individuals aged 18 and over. By booking,
        you confirm that you meet this requirement and that the information you
        provide is accurate and complete.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site, including text, graphics, logos, and imagery,
        is the property of Dermolyxa and may not be reproduced without prior
        written consent.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        While we aim for accurate and current information, we do not warrant
        that the website is error-free or uninterrupted. Results of medical
        treatments vary between individuals, and we cannot guarantee specific
        outcomes. To the extent permitted by law, Dermolyxa is not liable for
        damages arising from reliance on website content.
      </p>

      <h2>External links</h2>
      <p>
        Our website may link to third-party sites, including social media and
        map services. We are not responsible for the content or practices of
        these external sites.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of New York, United
        States, and any disputes are subject to the exclusive jurisdiction of
        its courts.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Contact us via our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </LegalPage>
  );
}