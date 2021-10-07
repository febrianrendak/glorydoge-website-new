module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        expletus: ['Expletus Sans', 'sans-serif'],
      },
      colors: {
        primary: '#001524',
        secondary: '#1089FF',
        orange: '#ff4a1c',
      },
      boxShadow: {
        preview: '0 0 8px 0 rgba(#000, 0.5)',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
