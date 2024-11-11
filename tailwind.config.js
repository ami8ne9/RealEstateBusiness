/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens: {
        'xs':'10px',
        'sm': '420px',
        'md':'800px',
        'lg':'1100px',
      },
      fontFamily:{
        sans:['Roboto','sans-serif'],
        'open-sans':["Poppins",'sans-serif'],
        'Pacifico':['Pacifico']
      },
      colors: {
          customBeige: '#cfbfa8',
          costomWhite:'#f2f2f2',
          costomGreen:'#2f5047',
          newGreen:'#f9f0eb',
          oldGreen:'#e2b29e',
          b:'rgba(248,237,233,255)'
      }
    },
  },
  plugins: [],
}