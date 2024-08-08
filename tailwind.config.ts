import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        "2xl":{max:"1535px"},
        "xxl":{max:"1465px"},
        "xl":{max:"1279px"},
        "lg":{max:"1023px"},
        "l":{max:"991px"},
        "md":{max:"767px"},
        "sm":{max:"639px"},
        "xs":{max:"400px"}
      }
    },
  },
  plugins: [],
};
export default config;
