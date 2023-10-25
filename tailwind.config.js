/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.73) 0%, #B51FD0 18.38%, #BF79CC 47.56%, #B51FD0 66.61%, rgba(6, 5, 5, 0.85) 100%)',
    },
    colors: {
      customGray: '#949494',
      hoverGray: '#B0B0B0'
    },
  },
  },
  plugins: [],
}