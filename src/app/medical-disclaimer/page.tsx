import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer for Dermolyxa: individual results may vary and website content is not medical advice.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage title="Medical Disclaimer" updated="13 October 2026">
      <p>
        Please read this disclaimer carefully. The information on this website
        is provided for general educational purposes only and is not a substitute
        for professional medical advice, diagnosis, or treatment.
      </p>

      <h2>Individual results may vary</h2>
      <p>
        <strong>Individual results may vary.</strong> Photographs, case studies,
        and statistics shown on this website are illustrative of typical
        outcomes and are not a guarantee of your personal results. Your outcome
        depends on many factors, including your anatomy, health, age, skin and
        hair type, adherence to aftercare, and the treatment plan designed for
        you by your specialist.
      </p>

      <h2>Not medical advice</h2>
      <ul>
        <li>
          Content on this site does not constitute, and should not be relied on
          as, medical or clinical advice.
        </li>
        <li>
          It does not create a physician-patient relationship between you and
          Dermolyxa.
        </li>
        <li>
          You should always consult a qualified healthcare professional before
          deciding whether a treatment is appropriate for you.
        </li>
      </ul>

      <h2>Before and after images</h2>
      <p>
        Before-and-after imagery on this website is illustrative. Where images
        are placeholders or stock imagery, they are clearly presented for
        demonstration purposes and do not represent any specific patient.
      </p>

      <h2>Emergency care</h2>
      <p>
        This website is not for emergencies. If you are experiencing a medical
        emergency, call your local emergency number immediately rather than
        contacting us online.
      </p>

      <h2>Consultation required</h2>
      <p>
        Treatment plans, risks, and fees are individual and can only be properly
        assessed during a consultation with one of our specialists. Requests sent
        through our website do not constitute a confirmed diagnosis or treatment
        plan.
      </p>

      <h2>How to reach us</h2>
      <p>
        If you have questions about a treatment or this disclaimer, please speak
        with our team via our <a href="/contact">contact page</a> or by phone.
      </p>
    </LegalPage>
  );
}