module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.jsx']
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
