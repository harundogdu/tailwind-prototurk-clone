module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#32445a",
        secondary: "#2b3548",
        html : "#f74e28",
        css : "#1da1f2",
        js : "#f7df1e",
        php : "#7478ae",
        mysql : "#4479a1",
        twitter: "#1da1f2",
      },
      zIndex: {
        "-1": "-1",
      },
      height:{
        "full-screen": "92%",
      }
    },
  },
  plugins: [],
};
