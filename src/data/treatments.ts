export type TreatmentStep = {
  title: string;
  description: string;
};

export type RecoveryPhase = {
  phase: string;
  timeframe: string;
  description: string;
};

export type Treatment = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  duration: string;
  sessions: string;
  overview: string;
  whoFor: string[];
  steps: TreatmentStep[];
  recovery: RecoveryPhase[];
};

export const treatments: Treatment[] = [
  {
    slug: "fue-hair-transplant",
    title: "FUE Hair Transplant",
    tagline: "Follicle-by-follicle restoration for a naturally dense hairline.",
    category: "Hair Restoration",
    image: "/treatments/fue-hair-transplant.png",
    duration: "6–8 hours",
    sessions: "Single session",
    overview:
      "Follicular Unit Extraction (FUE) is the gold standard in permanent hair restoration. Individual follicular units are extracted from the donor zone and precisely implanted into thinning or receding areas, creating a hairline that grows naturally for life. Our surgeons plan every graft with artistry so density, angle, and direction blend seamlessly with your existing hair.",
    whoFor: [
      "Men and women with stable, patterned hair loss",
      "Those seeking a permanent, scar-minimal solution",
      "Candidates with a healthy donor area and realistic goals",
      "Anyone wanting to restore a receding hairline or crown",
    ],
    steps: [
      {
        title: "Consultation & Mapping",
        description:
          "A physician assesses your donor area, designs a bespoke hairline, and calculates the graft count required.",
      },
      {
        title: "Donor Extraction",
        description:
          "Under local anaesthesia, individual follicular units are extracted using precision micro-punches.",
      },
      {
        title: "Graft Preparation",
        description:
          "Grafts are sorted and stored in a nutrient solution to maximise survival before implantation.",
      },
      {
        title: "Implantation",
        description:
          "Each graft is placed at the correct angle and density to build a natural, feathered hairline.",
      },
    ],
    recovery: [
      {
        phase: "Day 1–3",
        timeframe: "Initial healing",
        description:
          "Mild swelling and tenderness. Small scabs form at the donor and recipient sites.",
      },
      {
        phase: "Week 1–2",
        timeframe: "Scabs shed",
        description:
          "Scabs naturally fall away. Transplanted hair may shed as follicles enter a resting phase.",
      },
      {
        phase: "Month 3–4",
        timeframe: "New growth",
        description:
          "New hair begins to grow and the transplanted area starts to thicken visibly.",
      },
      {
        phase: "Month 12–18",
        timeframe: "Final results",
        description:
          "Full density and maturity are reached, revealing the long-term, permanent result.",
      },
    ],
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy",
    tagline: "Platelet-rich plasma to reactivate dormant follicles.",
    category: "Regenerative",
    image: "/treatments/prp-therapy.png",
    duration: "45–60 minutes",
    sessions: "3–4 sessions",
    overview:
      "Platelet-Rich Plasma (PRP) therapy uses your own growth factors to stimulate hair follicles and rejuvenate the scalp. A small sample of blood is centrifuged to concentrate platelets, which are then micro-injected into the scalp. This regenerative approach improves blood supply, thickens existing hair, and wakes dormant follicles with no foreign substances involved.",
    whoFor: [
      "Early to moderate hair thinning",
      "Those wanting a non-surgical regenerative option",
      "Clients combining PRP with a transplant for enhanced results",
      "People looking to strengthen and thicken existing hair",
    ],
    steps: [
      {
        title: "Blood Draw",
        description:
          "A small blood sample is collected and prepared to isolate the growth-factor rich plasma.",
      },
      {
        title: "Centrifugation",
        description:
          "The sample is spun to separate and concentrate platelets and regenerative proteins.",
      },
      {
        title: "Micro-Injection",
        description:
          "The plasma is precisely injected across the treatment zones with minimal discomfort.",
      },
      {
        title: "Follow-up Series",
        description:
          "A short series of sessions builds cumulative density, with maintenance as needed.",
      },
    ],
    recovery: [
      {
        phase: "Day 1",
        timeframe: "Immediate",
        description:
          "Mild tenderness or redness at injection sites that resolves within hours.",
      },
      {
        phase: "Week 1",
        timeframe: "Settling",
        description:
          "The scalp returns to normal. Normal washing can usually resume within 24 hours.",
      },
      {
        phase: "Month 2–3",
        timeframe: "Visible change",
        description:
          "Reduced shedding and improved hair quality become noticeable.",
      },
      {
        phase: "Month 4–6",
        timeframe: "Peak results",
        description:
          "Thickest growth is seen after the full course, maintained with periodic sessions.",
      },
    ],
  },
  {
    slug: "non-surgical-hair-regrowth",
    title: "Non-Surgical Hair Regrowth",
    tagline: "Advanced therapies to revive and retain your natural hair.",
    category: "Regenerative",
    image: "/treatments/non-surgical-hair-regrowth.png",
    duration: "30–60 minutes",
    sessions: "Personalised course",
    overview:
      "Our non-surgical regrowth programme combines medical-grade therapies, laser stimulation, and topical protocols to slow hair loss and encourage regrowth. Customised to your stage of thinning, it is an ideal first step or complement to surgical restoration, strengthening hair without downtime or incisions.",
    whoFor: [
      "Those in the early stages of hair loss",
      "Clients not ready for surgery",
      "Individuals wanting to preserve existing hair",
      "Post-transplant patients supporting new growth",
    ],
    steps: [
      {
        title: "Scalp Analysis",
        description:
          "Digital imaging and trichoscopy reveal density, follicle health, and the pattern of loss.",
      },
      {
        title: "Custom Protocol",
        description:
          "A combination of laser stimulation, medical topicals, and nutrition is tailored to you.",
      },
      {
        title: "In-Clinic Therapy",
        description:
          "Regular sessions stimulate circulation and follicle activity in targeted zones.",
      },
      {
        title: "Progress Reviews",
        description:
          "Scheduled assessments track regrowth and allow the plan to be refined over time.",
      },
    ],
    recovery: [
      {
        phase: "Same day",
        timeframe: "No downtime",
        description:
          "Treatments are comfortable and non-invasive; you can return to your day immediately.",
      },
      {
        phase: "Week 2–4",
        timeframe: "Early support",
        description:
          "Hair may feel stronger and shedding begins to slow as the scalp responds.",
      },
      {
        phase: "Month 3–4",
        timeframe: "Regrowth",
        description:
          "New vellus and transitional hairs appear and existing density improves.",
      },
      {
        phase: "Month 6",
        timeframe: "Consolidation",
        description:
          "Results stabilise with an ongoing maintenance plan to protect your gains.",
      },
    ],
  },
  {
    slug: "hair-replacement",
    title: "Hair Replacement",
    tagline: "Immediate, undetectable coverage with medical-grade systems.",
    category: "Hair Restoration",
    image: "/treatments/hair-replacement.png",
    duration: "60–90 minutes",
    sessions: "Per system",
    overview:
      "For those seeking instant, non-surgical coverage, our medical-grade hair replacement systems are custom-built to match your hair colour, density, and texture. Attached discreetly and designed to be undetectable, they restore a full, natural look immediately — with the flexibility to combine with regenerative treatments over time.",
    whoFor: [
      "Clients wanting immediate, non-surgical results",
      "Advanced hair loss where transplants are limited",
      "Those with temporary or medical hair loss",
      "Anyone seeking a flexible, reversible option",
    ],
    steps: [
      {
        title: "Consultation & Match",
        description:
          "Hair colour, texture, and density are matched precisely to your natural look.",
      },
      {
        title: "Custom Fabrication",
        description:
          "A bespoke system is crafted to integrate seamlessly with your existing hair.",
      },
      {
        title: "Fitting & Attachment",
        description:
          "The system is fitted and secured using a discreet, skin-safe attachment method.",
      },
      {
        title: "Maintenance",
        description:
          "Scheduled servicing keeps the system secure, fresh, and looking natural.",
      },
    ],
    recovery: [
      {
        phase: "Day 1",
        timeframe: "Instant result",
        description:
          "A full head of hair is visible immediately after fitting, with no recovery period.",
      },
      {
        phase: "Week 1",
        timeframe: "Adaptation",
        description:
          "You adjust to the system with guidance on care, styling, and comfort.",
      },
      {
        phase: "Week 3–4",
        timeframe: "Servicing",
        description:
          "A maintenance appointment re-secures and refreshes the system.",
      },
      {
        phase: "Ongoing",
        timeframe: "Long-term",
        description:
          "Regular servicing maintains a seamless, natural appearance month after month.",
      },
    ],
  },
  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    tagline: "Luminous, even-toned skin with regenerative precision.",
    category: "Skin",
    image: "/treatments/skin-rejuvenation.png",
    duration: "45–75 minutes",
    sessions: "2–4 sessions",
    overview:
      "Our skin rejuvenation protocols combine resurfacing, regenerative actives, and light therapy to refine texture, tone, and radiance. Whether addressing pigmentation, fine lines, or dullness, each treatment is calibrated to your skin for visible improvement with minimal downtime and a naturally glowing finish.",
    whoFor: [
      "Dull, uneven, or pigmented skin",
      "Fine lines and early signs of ageing",
      "Those wanting a radiant, even complexion",
      "Clients seeking minimal-downtime resurfacing",
    ],
    steps: [
      {
        title: "Skin Assessment",
        description:
          "In-depth analysis identifies texture, tone, and your specific concerns.",
      },
      {
        title: "Bespoke Protocol",
        description:
          "A tailored combination of resurfacing and regenerative techniques is selected.",
      },
      {
        title: "Treatment Session",
        description:
          "The protocol is delivered with medical-grade technology and soothing care.",
      },
      {
        title: "Aftercare Plan",
        description:
          "A home regimen and review protect and prolong your results.",
      },
    ],
    recovery: [
      {
        phase: "Day 1",
        timeframe: "Immediate",
        description:
          "Mild warmth or redness that typically settles within hours.",
      },
      {
        phase: "Day 2–3",
        timeframe: "Settling",
        description:
          "Skin may lightly flake or feel tight as it renews; makeup can resume as advised.",
      },
      {
        phase: "Week 1–2",
        timeframe: "Radiance",
        description:
          "Brighter, smoother skin emerges as the renewal process completes.",
      },
      {
        phase: "Week 4–8",
        timeframe: "Refined results",
        description:
          "Cumulative improvement in tone and texture peaks across your series.",
      },
    ],
  },
  {
    slug: "aesthetic-treatments",
    title: "Aesthetic Treatments",
    tagline: "Refined facial artistry for natural, balanced contours.",
    category: "Aesthetic",
    image: "/treatments/aesthetic-treatments.png",
    duration: "30–60 minutes",
    sessions: "As advised",
    overview:
      "Our aesthetic treatments blend injectables, skin boosters, and contouring artistry to enhance your features while preserving your natural character. Led by experienced physicians, every plan is conservative and precise — refinement over transformation, always tailored to your anatomy and goals.",
    whoFor: [
      "Those wishing to soften lines and restore volume",
      "Clients wanting subtle, natural enhancement",
      "Individuals seeking preventive anti-ageing care",
      "Anyone desiring balanced, refreshed features",
    ],
    steps: [
      {
        title: "Facial Consultation",
        description:
          "A physician assesses your facial proportions and discusses your goals.",
      },
      {
        title: "Personalised Plan",
        description:
          "A precise treatment map is designed to enhance rather than alter your features.",
      },
      {
        title: "Treatment",
        description:
          "Products are administered with meticulous technique for comfort and balance.",
      },
      {
        title: "Review",
        description:
          "A follow-up review refines results and plans future maintenance.",
      },
    ],
    recovery: [
      {
        phase: "Day 1",
        timeframe: "Immediate",
        description:
          "Minor swelling or tenderness may occur at injection points and settles quickly.",
      },
      {
        phase: "Day 2–3",
        timeframe: "Settling",
        description:
          "Any swelling resolves, and results begin to become apparent.",
      },
      {
        phase: "Week 2",
        timeframe: "Full effect",
        description:
          "Neuromodulators and fillers settle into their final, balanced result.",
      },
      {
        phase: "Month 3–12",
        timeframe: "Maintenance",
        description:
          "Results are maintained with periodic sessions tailored to you.",
      },
    ],
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((treatment) => treatment.slug);
}
