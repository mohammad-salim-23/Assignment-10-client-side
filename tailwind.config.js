/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary:'#249898'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:["light","dark"]
  }
}

