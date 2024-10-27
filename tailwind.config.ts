import type { Config } from "tailwindcss";

const config: Config = {
	daisyui: {
		themes: ["light"],
	  },
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
  	extend: {
  		colors: {
			myBlack: "#191717",
			myPink: "#FFCAC8",
			myPurple: "#9d4edd",
			mywhite: "#FFFFFF",
			myLightGrey: "#F0F0F0",
			myDarkGrey: "#888888",
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),require('daisyui')],
};
export default config;
