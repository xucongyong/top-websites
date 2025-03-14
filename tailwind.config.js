
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}