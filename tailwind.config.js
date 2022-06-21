const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    fontSize: {
      xxs: [
        ".75rem",
        {
          letterSpacing: ".03125rem", //2%
        },
      ],
      xs: [
        ".8rem",
        {
          letterSpacing: ".03125rem", //2%
        },
      ],
      sm: [
        ".875rem",
        {
          letterSpacing: ".03125rem", //2%
        },
      ],
      base: [
        "1rem",
        {
          letterSpacing: ".02", //2%
          lineHeight: "1.375rem",
        },
      ],
      lg: [
        "1.25rem",
        {
          letterSpacing: ".03125rem", //2%
          lineHeight: "1.375rem",
        },
      ],
      xl: [
        "1.563rem", //25px
        {
          letterSpacing: "0.015625rem", //1%
          lineHeight: "1.875rem", //1.375rem before
        },
      ],
      "2xl": [
        "1.953rem",
        {
          letterSpacing: "0", //1%
          lineHeight: "1.95rem",
        },
      ],
      "3xl": [
        "2.441rem",
        {
          letterSpacing: "0",
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "3.052rem",
        {
          letterSpacing: "0",
          lineHeight: "3.688rem",
        },
      ],

      "5xl": [
        "3.815rem",
        {
          letterSpacing: "0",
          lineHeight: "4.375rem",
        },
      ],

      "6xl": [
        "4.768rem",
        {
          letterSpacing: "0",
          lineHeight: "4.368rem",
        },
      ],
      "7xl": [
        "5.96rem",
        {
          letterSpacing: "0",
          lineHeight: "5.313rem",
        },
      ],
      "8xl": [
        "7.451rem",
        {
          letterSpacing: "0",
        },
      ],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
};
