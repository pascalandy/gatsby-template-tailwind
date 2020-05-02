// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {},
  variants: {},
  //github.com/tailwindcss/custom-forms is INCLUDED in tailwindcss/ui
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
