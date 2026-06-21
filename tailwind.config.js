export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0077b6', light: '#00b4d8', dark: '#005e8b' },
        dental: { bg: '#f8fbff', card: '#ffffff', border: '#e1eeff' }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
