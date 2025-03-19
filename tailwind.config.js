/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app.vue',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.{vue,js,ts}',
      './pages/**/*.{vue,js,ts}',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        colors: {
          customColor: '#1c92f2', // Custom color
          customGray: {
            light: '#f7fafc',
            DEFAULT: '#cbd5e0',
            dark: '#4a5568',
          },
        },
      },
    },
    variants: {},
    plugins: [],
  }
  module.exports = {
    darkMode: 'class', // or 'media' for media-query based dark mode
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }