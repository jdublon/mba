/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-rubik)'],
      serif: ['var(--font-domine)'],
    },
    screens: {
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1536px',
      'xxl': '1920px',
    },
    extend: {
      colors: {
        'black': '#2A2D2C',
        "primary-green": "#98BE42",
      },
    }
  },
  plugins: [],
}

