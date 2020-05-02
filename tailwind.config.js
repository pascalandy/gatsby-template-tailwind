// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  variants: {},
  //github.com/tailwindcss/custom-forms is INCLUDED in tailwindcss/ui
  theme: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
