module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        bloghalka: {
          bg: '#00b6e7',
          beige: '#fcfdfc',
          main: '#121414',
          second: '#0a2235'
        },
        fontSize: {
          extreme: '10rem',

        }
      },
    },
  },
  variants: {
    extend: {
      fill: ['group-hover'],
      stroke: ['group-hover'],
    },
  },
  plugins: [],
}
