/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {fontFamily: {
      'brandon': ['BrandonTextWebRegular', 'sans-serif'],
    }, colors: {
      customPink: '#fc2e71',
    }},
  },
  plugins: [],
}

