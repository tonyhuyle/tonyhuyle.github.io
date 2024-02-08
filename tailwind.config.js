/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      spacing: {
        '100': '25rem', // Adjust this value as needed
        '110': '27.5rem',
      },
    },
  },
  // Other configurations...
};