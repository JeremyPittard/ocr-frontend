module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ocr-primary': '#F68F1E',
        'ocr-secondary': '#ffffff',
        'ocr-text': '#6b757d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
