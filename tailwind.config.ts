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
          green: "#18A34A",
          deep: "#166534",
          leaf: "#22C55E",
          mint: "#DCFCE7",
          light: "#F0FDF4",
          alert: "#FEF9C3",
          orange: "#F59E0B",
        },
        ink: {
          DEFAULT: "#0A1628",
          soft: "#4B5563",
          mute: "#9CA3AF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F9FAFB",
        },
        border: "#E5E7EB",
        ring: "#18A34A",
        background: "#FFFFFF",
        foreground: "#0A1628",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
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
        card: "0 1px 3px rgba(10,22,40,0.06), 0 8px 24px rgba(10,22,40,0.07)",
        cardHover: "0 4px 12px rgba(10,22,40,0.10), 0 20px 40px rgba(10,22,40,0.12)",
        soft: "0 1px 2px rgba(10,22,40,0.05)",
        glow: "0 0 40px rgba(24,163,74,0.25)",
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
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
