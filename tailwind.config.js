/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Site palette (wine & gold): #1C1517 · #3D1A22 · #C9354A · #E27D7D · #F6E3D3 · #F4A62A
      // The components use the `red`, `orange` and `zinc` class names, so those scales
      // are remapped here: red = crimson (primary), orange = soft rose (secondary),
      // zinc = warm wine-tinted darks, amber = the gold highlight.
      colors: {
        zinc: {
          950: '#150f11',
          900: '#241a1d',
          800: '#33232a',
          700: '#46303a',
          600: '#5d4250',
        },
        red: {
          50: '#fdf2f3',
          100: '#fbe3e5',
          200: '#f6c4c9',
          300: '#ee98a1',
          400: '#e06473',
          500: '#C9354A',
          600: '#ad2a3e',
          700: '#8e2234',
          800: '#6b1b28',
          900: '#3D1A22',
        },
        orange: {
          50: '#fdf5f4',
          100: '#fbe7e5',
          200: '#f6cfcb',
          300: '#efb0aa',
          400: '#e8948f',
          500: '#E27D7D',
          600: '#c25f5f',
          700: '#a04a4c',
          800: '#7e3b3d',
          900: '#5e2e30',
        },
        amber: {
          200: '#f8dca5',
          300: '#f7c766',
          400: '#F4A62A',
          500: '#e2921a',
        },
        cream: '#F6E3D3',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'bounce': 'bounce 2s infinite',
        'flash': 'flash 1s infinite',
        'fill-bar': 'fillBar 1.5s ease-out forwards',
      },
      boxShadow: {
        'neon-red': '0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.3), 0 0 30px rgba(239, 68, 68, 0.2)',
        'neon-orange': '0 0 10px rgba(249, 115, 22, 0.5), 0 0 20px rgba(249, 115, 22, 0.3), 0 0 30px rgba(249, 115, 22, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // Tighter corners across the whole site (Tailwind defaults are 8/12/16/24px)
      borderRadius: {
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.5rem',
        '3xl': '0.625rem',
      }
    },
  },
  plugins: [],
}