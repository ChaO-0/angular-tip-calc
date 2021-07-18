module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cyan-primary": "hsl(186, 14%, 43%)",
        "cyan-outline": "hsl(172, 67%, 45%)",
        "cyan-input": "hsl(189,41%,97%)",
        "cyan-dark": "hsl(183, 100%, 15%)",
        "cyan-light": "hsl(185, 41%, 84%);",
        "cyan-dark-gray": "hsl(184, 14%, 56%)",
      },
      letterSpacing: {
        widest: ".5em",
      },
      fontFamily: {
        base: "Space Mono",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
