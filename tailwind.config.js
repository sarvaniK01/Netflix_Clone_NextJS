module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'white':'#FFFF',
        'blue':'#0068DC',
        'grey':'#48494B',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/main-bg.jpg')",
      }
    },
  },
  plugins: [],
};
