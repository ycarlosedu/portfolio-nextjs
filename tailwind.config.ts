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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        draw: {
          "0%": { "stroke-dasharray": "0, 200", "stroke-dashoffset": "200" },
          "100%": { "stroke-dasharray": "200, 200", "stroke-dashoffset": "0" }
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
        rotate: "rotate 20s linear infinite",
        float: "float 3s ease-in-out infinite",
        draw: "draw 2s linear forwards",
        "float-side": "float-side 3s ease-in-out infinite",
        "float-shadow": "float-shadow 10s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
