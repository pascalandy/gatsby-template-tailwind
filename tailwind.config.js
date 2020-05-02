const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js"],
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}

