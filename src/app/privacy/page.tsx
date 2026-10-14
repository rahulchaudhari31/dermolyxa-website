import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Dermolyxa collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="13 October 2026">
      <p>
        Your privacy matters to us. This policy explains what information
        Dermolyxa collects, how we use it, and the choices you have. By using
        our website or services, you agree to the practices described here.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> name, phone, email,
          treatment preferences, dates, and any photos you submit for an
          assessment or consultation.
        </li>
        <li>
          <strong>Technical information:</strong> usage data, device and
          browser details, and anonymous analytics collected through cookies.
        </li>
        <li>
          <strong>Communications:</strong> records of calls, messages, and
          emails you send to us.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To arrange and manage consultations and treatments.</li>
        <li>To assess photos you submit for a preliminary opinion.</li>
        <li>To respond to enquiries and provide customer support.</li>
        <li>To improve our website, services, and patient experience.</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use a minimal set of cookies to remember your preferences and
        understand how our site is used. You can accept or decline non-essential
        cookies through the notice shown on your first visit. You may also
        disable cookies in your browser at any time.
      </p>

      <h2>Photos and medical information</h2>
      <p>
        Photos and medical details you share are treated as confidential and are
        used solely for your assessment and care. They are never sold. We
        restrict access to authorised clinical and administrative staff and
        follow applicable data-protection standards.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share data only with trusted
        service providers who help us operate (for example, secure email and
        booking services) and only to the extent necessary, under confidentiality
        obligations.
      </p>

      <h2>Data security</h2>
      <p>
        We apply appropriate technical and organisational measures to protect
        your information against loss, misuse, and unauthorised access. No
        method of transmission over the internet is completely secure, so we
        cannot guarantee absolute security.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information at any time. To exercise these rights, contact us using the
        details below.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy enquiries:{" "}
        <a href="mailto:privacy@dermolyxa.com">privacy@dermolyxa.com</a>. For
        general queries, visit our{" "}
        <a href="/contact">contact page</a>.
      </p>

      <p>
        We may update this policy from time to time. The date above reflects the
        most recent revision.
      </p>
    </LegalPage>
  );
}