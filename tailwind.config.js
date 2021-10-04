module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ocr-primary': '#F68F1E',
        'ocr-secondary': '#657F7D',
        'ocr-white': '#ffffff',
        'ocr-text': '#6b757d'
      },
      height: {
        xxxl: '75vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
