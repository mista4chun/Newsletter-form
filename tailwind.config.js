/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        Tomato: 'hsl(4, 100%, 67%)',
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        hoverPink: 'hsl(347, 62%, 55%)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
