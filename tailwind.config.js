/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}', // Adjust paths based on your project structure
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

