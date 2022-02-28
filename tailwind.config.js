module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.jsx']
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
