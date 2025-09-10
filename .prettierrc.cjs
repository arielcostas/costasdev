/** @type {import("prettier").Config} */
module.exports = {
  svelteBracketNewLine: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
