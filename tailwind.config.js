/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-plan-details-color": "#5D55A3",
        "custom-free-trial-button-color": "#37CC8A",
      },
      fontSize: {
        xs2: "0.5rem",
      },
    },
  },
  plugins: [],
};
