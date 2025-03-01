/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
  	extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}