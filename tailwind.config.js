/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss.defaultTheme")
module.exports = {
  mode:"jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
