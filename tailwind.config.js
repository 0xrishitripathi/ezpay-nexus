/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-500
        secondary: '#10B981', // emerald-500
        accent: '#6366F1', // indigo-500
        background: '#F9FAFB', // gray-50
        card: '#FFFFFF',
        text: '#1F2937', // gray-800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
