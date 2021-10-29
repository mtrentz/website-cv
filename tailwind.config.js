module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx}', './src/components/*/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        main: '#67839C',
        secondary: '#7790A7',
        accent: '#AABAC8',
        terciary: '#EDF1F3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
