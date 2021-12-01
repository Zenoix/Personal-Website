module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      "2xs": "320px",
      // => @media (min-width: 320px) { ... }

      xs: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      
      "3xl": "1921px",
      // => @media (min-width: 1921px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "accent-blue": "#70ECFF",
      "accent-pink": "#ca78e3",
      "text-white": "#f1f2f9",
      "text-black": "#ffffff",
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
