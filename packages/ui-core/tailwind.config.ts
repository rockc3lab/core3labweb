import baseConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Next.js specific paths
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Include shared UI packages
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    // Next.js 15 specific paths
    "./node_modules/next/dist/**/*.js",
  ],
  // theme: {
  //   ...baseConfig.theme,
  //   extend: {
  //     ...baseConfig.theme?.extend,
  //   },
  // },
};

export default config;
