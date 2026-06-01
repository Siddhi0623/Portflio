/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas:      '#faf6f0',
        'canvas-alt':'#f0ebe2',
        terracotta:  '#c94c2e',
        'terra-dark':'#8b2800',
        'terra-light':'#e8a090',
        'orange-hero':'#f5a220',
        ink:         '#1a1a1a',
        muted:       '#6b6b6b',
        'card-teal':    '#c5e8e0',
        'card-yellow':  '#f5d88c',
        'card-salmon':  '#f5c0b0',
        'card-blue':    '#c0cff5',
        'card-green':   '#c8e0b8',
        'card-lavender':'#d8c0f0',
      },
      fontFamily: {
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        nav: '0.18em',
        wide2: '0.25em',
      },
      animation: {
        'float':   'float 5s ease-in-out infinite',
        'blink':   'blink 0.9s step-end infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(18px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
