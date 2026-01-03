import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // @ts-expect-error heroui plugin type mismatch with tailwindcss v3
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: "#0a0a0a",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#f5a524",
            foreground: "#000000",
          },
        },
      },
    },
  })],
};

export default config;
