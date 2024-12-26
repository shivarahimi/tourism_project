import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gt-gradient-1": "linear-gradient(90deg, #4300e7 0%, #7d00fc 100%)",
      },

      screens: {
        "custom-sm": { min: "320px", max: "370px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
