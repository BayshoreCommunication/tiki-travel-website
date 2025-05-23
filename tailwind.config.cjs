import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0BB4AC",
        secondary: "#063040",
        black: "#000000",
        white: "#FFFFFF",
      },
      backgroundImage: {
        doctors: "url('/assets/Testimonials/transparentGradient.png')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "1rem",
      },
    },
    // maxWidth: {
    //   "2xl": "1536px", // The default value for 2xl in Tailwind CSS
    // },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
