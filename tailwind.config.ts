import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5F2EB",
          50: "#FAF9F6",
          100: "#F5F2EB",
          200: "#ECEAE3",
          300: "#E3DFD5",
          400: "#DEDAD0",
        },
        charcoal: {
          DEFAULT: "#242724",
          900: "#1A1C1A",
          800: "#242724",
          700: "#363A36",
          600: "#4D524D",
          500: "#64655F",
        },
        surface: {
          DEFAULT: "#ECEAE3",
          subtle: "#F5F2EB",
          muted: "#E6E3DA",
        },
        slate: {
          accent: "#637B96",
          dark: "#40546A",
          mist: "#DCE4ED",
        },
        border: {
          DEFAULT: "#DEDAD0",
          subtle: "#EAE6DD",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        card: "20px",
        portrait: "28px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
