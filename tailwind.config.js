module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "accent-blue": "#70ECFF",

      "accent-pink": "#ca78e3",
      "text-white": "#f1f2f9",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
