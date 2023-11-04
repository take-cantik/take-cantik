import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#212121",
      "black-lighten-1": "#757575",
      "black-lighten-2": "#707070",
      gray: "#bdbdbd",
      "gray-lighten-1": "#e0e0e0",
      "gray-lighten-2": "#efefef",
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
