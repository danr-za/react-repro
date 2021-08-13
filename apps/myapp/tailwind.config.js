const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path')

module.exports = {
  mode: 'jit',
  purge: [
    join(__dirname, 'src/app/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
