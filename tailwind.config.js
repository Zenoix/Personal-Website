module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "accent-blue": "#70ECFF",
      "accent-pink": "#ca78e3",
      "text-white": "#f1f2f9",
      "background-main": "#121212",
      "background-secondary": "#1f1f1f",
      "background-tertiary": "#171717",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
