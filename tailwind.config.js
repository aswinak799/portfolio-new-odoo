/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f', // Near black
        surface: '#1a1a1a',    // Dark grey
        foreground: '#e5e5e5', // Off-white text
        primary: '#ffffff',    // Stark white
        accent: '#ccff00',     // Acid Green
        muted: '#666666',      // Muted grey
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
