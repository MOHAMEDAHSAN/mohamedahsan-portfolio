import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        amaranth: ['Amaranth', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F3F3F3",
        foreground: "#4B4B4B",
        primary: {
          DEFAULT: "#D72638",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#FAFAFA",
          foreground: "#4B4B4B",
        },
        accent: {
          DEFAULT: "#4B4B4B",
          foreground: "#FAFAFA",
        },
        highlight: {
          DEFAULT: "#2563EB",
          gold: "#FFC107",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // NEW: Rhythmic Sway / Pendulum Animation
        // Rotates back and forth without resizing or glowing
        "rhythmic-tilt": {
          "0%, 100%": { 
            transform: "rotate(-10deg)",
          },
          "50%": { 
            transform: "rotate(10deg)",
          }
        },
        "line-shimmer": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-up": "scale-up 0.3s ease-out",
        // 3s duration: Slow and groovy
        "rhythmic-tilt": "rhythmic-tilt 3s ease-in-out infinite", 
        "line-shimmer": "line-shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.clip-hex': {
          'clip-path': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;