/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f5f0",
          100: "#dbe7db",
          200: "#b7cfb7",
          300: "#8db28e",
          400: "#5e8d62",
          500: "#3f6e44",
          600: "#2f5535",
          700: "#26442b",
          800: "#1d3422",
          900: "#13231a",
          950: "#0a1610",
        },
        lake: {
          50: "#eef6fb",
          100: "#d6e9f3",
          200: "#a9d0e6",
          300: "#73b1d3",
          400: "#4892bd",
          500: "#3477a3",
          600: "#285e85",
          700: "#214c6c",
          800: "#1c3e58",
          900: "#17324a",
        },
        sunset: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        earth: {
          50: "#faf7f2",
          100: "#f1ebe0",
          200: "#e2d6c0",
          300: "#cdba98",
          400: "#b59a73",
          500: "#9c7f55",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["17px", { lineHeight: "1.7" }],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.18)",
        soft: "0 10px 40px -10px rgba(15, 35, 25, 0.35)",
      },
      backgroundImage: {
        "mesh-forest":
          "radial-gradient(at 20% 10%, rgba(63,110,68,0.45) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(52,119,163,0.45) 0px, transparent 50%), radial-gradient(at 30% 90%, rgba(249,115,22,0.3) 0px, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
