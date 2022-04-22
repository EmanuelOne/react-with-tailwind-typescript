module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F4F7FA',
        secondary: '#E9E9E9',
        primary: '#0B2E65',
        textGray: 'rgba(10,46,101,.60)',
        textBlue: '#5A7EF5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
