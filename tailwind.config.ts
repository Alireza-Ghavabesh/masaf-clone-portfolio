import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        IRANSansWeb: ["IRANSansWeb"],
        IranYekanWebBold: ["IranYekanWebBold"],
      },
      colors: {
        zomorod: "#7CA8B0",
        zzomorod: "rgb(57 152 172/var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [],
};
export default config;
