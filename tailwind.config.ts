import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    data: {
      active: "active~=true",
      disabled: "disabled~=true",
      invalid: "invalid~=true"
    },
    container: {
      center: true,
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      screens: {
        xs: "425px",
        "2xl": "1400px"
      },
      backgroundImage: {
        "banner-gradient-light":
          "linear-gradient(to bottom, #f1f5f999, #67e8f999), url('/images/banner-bg.svg')",
        "banner-gradient-dark":
          "linear-gradient(to bottom, #0f172a99, #67e8f999), url('/images/banner-bg.svg')",
        banner: "url('/images/banner-bg.svg')"
      },
      colors: {
        light: "#FFF",
        dark: "#121212"
      },
      keyframes: {
        scaleUpAndDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "enter-spinning": "spin 0.5s linear",
        "enter-pulse": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
        "enter-bounce": "bounce 0.5s",
        "scale-up-and-down": "scaleUpAndDown 0.5s"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
