







module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {borderWidth: ['hover', 'focus'],},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
