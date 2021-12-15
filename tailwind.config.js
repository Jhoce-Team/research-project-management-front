const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      green: colors.green,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      color1: "#431a0e",
      color2: "#652f1b",
      color3: "#91522a",
      color4: "#c7823d",
      color5: "#fdbf5f",
      color6: "#171717",
      color7: "#06b6d4",
      color8: "#67e8f9",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
