export const RESULT_CATEGORIES = [
  "All",
  "Hair Transplant",
  "PRP",
  "Skin",
  "Aesthetic",
] as const;

export type ResultCategory = (typeof RESULT_CATEGORIES)[number];

export type ResultCase = {
  id: string;
  title: string;
  category: Exclude<ResultCategory, "All">;
  treatment: string;
  sessions: string;
  timeframe: string;
  before: string;
  after: string;
};

export const resultCases: ResultCase[] = [
  {
    id: "fue-hairline",
    title: "Hairline Restoration",
    category: "Hair Transplant",
    treatment: "FUE Hair Transplant",
    sessions: "1 session · 2,800 grafts",
    timeframe: "12 months",
    before: "/results/fue-hairline-before.png",
    after: "/results/fue-hairline-after.png",
  },
  {
    id: "crown-density",
    title: "Crown Density",
    category: "Hair Transplant",
    treatment: "FUE Crown Restoration",
    sessions: "1 session · 2,100 grafts",
    timeframe: "10 months",
    before: "/results/crown-density-before.png",
    after: "/results/crown-density-after.png",
  },
  {
    id: "prp-hair",
    title: "Hair Thickening",
    category: "PRP",
    treatment: "PRP Hair Therapy",
    sessions: "3 sessions",
    timeframe: "6 months",
    before: "/results/prp-hair-before.png",
    after: "/results/prp-hair-after.png",
  },
  {
    id: "prp-beard",
    title: "Beard Regrowth",
    category: "PRP",
    treatment: "PRP Beard Regrowth",
    sessions: "4 sessions",
    timeframe: "7 months",
    before: "/results/prp-beard-before.png",
    after: "/results/prp-beard-after.png",
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    category: "Skin",
    treatment: "Laser & Regenerative Facial",
    sessions: "3 sessions",
    timeframe: "8 weeks",
    before: "/results/skin-rejuvenation-before.png",
    after: "/results/skin-rejuvenation-after.png",
  },
  {
    id: "facial-aesthetics",
    title: "Facial Balance",
    category: "Aesthetic",
    treatment: "Filler & Skin Boosters",
    sessions: "2 sessions",
    timeframe: "6 weeks",
    before: "/results/facial-aesthetics-before.png",
    after: "/results/facial-aesthetics-after.png",
  },
];

export function getResultCase(id: string): ResultCase | undefined {
  return resultCases.find((item) => item.id === id);
}
