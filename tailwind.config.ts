import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          green: "#2E7D32",
          deep: "#1F5A23",
          leaf: "#43A047",
          mint: "#EAF7EC",
          light: "#F5FBF6",
          alert: "#FFF4D6",
          orange: "#F5A524",
        },
        ink: {
          DEFAULT: "#16301A",
          soft: "#5F7363",
          mute: "#8AA08E",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FCF8",
        },
        border: "#DCECDF",
        ring: "#2E7D32",
        background: "#FFFFFF",
        foreground: "#16301A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 48, 26, 0.04), 0 8px 24px rgba(22, 48, 26, 0.06)",
        cardHover:
          "0 2px 4px rgba(22, 48, 26, 0.06), 0 16px 40px rgba(22, 48, 26, 0.10)",
        soft: "0 1px 2px rgba(22, 48, 26, 0.04)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
