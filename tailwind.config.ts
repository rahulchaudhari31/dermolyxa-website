import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#141414",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F1D98A",
        },
        ivory: "#F7F3EA",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F1D98A 0%, #D4AF37 45%, #A9841F 100%)",
        "gold-radial":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.18) 0%, rgba(10,10,10,0) 60%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 18px 50px -20px rgba(212,175,55,0.35)",
        "gold-glow": "0 20px 60px -18px rgba(212,175,55,0.45)",
        soft: "0 24px 60px -30px rgba(0,0,0,0.9)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
