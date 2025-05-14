
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        arcblue: '#00CFFF', // a bright, electric blue
      },
      boxShadow: {
        'arc-glow': '0 0 10px #00CFFF, 0 0 20px #00CFFF',
      }
    },
  },
  
  plugins: [],
}
