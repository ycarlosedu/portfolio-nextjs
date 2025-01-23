import type { Config } from "tailwindcss";
import colors from "./src/styles/colors";

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
    colors,
    extend: {
      screens: {
        xs: "425px",
        "2xl": "1400px",
        "3xl": "1600px"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      boxShadow: {
        default: "16px 16px 15px 0px rgba(0, 122, 255, 0.5)",
        top: "-16px -16px 15px 0px rgba(0, 122, 255, 0.5)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "scale-up": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" }
        },
        "scale-down": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" }
        },
        "half-rotate": {
          "0%,100%": { transform: "rotate(0deg) scale(1)" },
          "33%": { transform: "rotate(60deg) scale(0.8)" },
          "66%": { transform: "rotate(-60deg) scale(0.8)" }
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "float-side": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" }
        },
        "float-shadow": {
          "0%,100%": {
            "box-shadow":
              "0 0 #0000, 0 0 #0000, 16px 16px 15px 0px rgba(0, 122, 255, 0.5);"
          },
          "25%": {
            "box-shadow":
              "0 0 #0000, 0 0 #0000, 16px -16px 15px 0px rgba(0, 122, 255, 0.5);"
          },
          "50%": {
            "box-shadow":
              "0 0 #0000, 0 0 #0000, -16px -16px 15px 0px rgba(0, 122, 255, 0.5);"
          },
          "75%": {
            "box-shadow":
              "0 0 #0000, 0 0 #0000, -16px 16px 15px 0px rgba(0, 122, 255, 0.5);"
          }
        },
        "pulse-shadow": {
          "0%, 100%": { "box-shadow": "0 0 0 0 rgba(0, 122, 255, 0.5)" },
          "50%": { "box-shadow": "0 0 0 10px rgba(0, 122, 255, 0)" }
        },
        "ring-phone": {
          "0%, 10%, 20%, 30%, 40%, 100%": { transform: "rotate(0deg)" },
          "5%, 15%, 25%, 35%": { transform: "rotate(10deg)" }
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%, 100%": { backgroundPosition: "-200% 0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "enter-spinning": "spin 0.5s linear",
        "enter-pulse": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
        "enter-bounce": "bounce 0.5s",
        "scale-up": "scale-up 5s ease-in-out infinite",
        "scale-down": "scale-down 5s ease-in-out infinite",
        "half-rotate": "half-rotate 20s linear infinite",
        rotate: "rotate 45s linear infinite",
        float: "float 3s ease-in-out infinite",
        "float-side": "float-side 3s ease-in-out infinite",
        "float-shadow": "float-shadow 10s ease-in-out infinite",
        "pulse-shadow": "pulse-shadow 2s ease-in-out infinite",
        "ring-phone": "ring-phone 5s ease-in-out infinite",
        shine: "shine 3s ease-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
