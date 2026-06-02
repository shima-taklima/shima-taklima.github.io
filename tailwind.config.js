/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', '"Noto Sans JP"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        ja:      ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        ink:    '#0c0c0c',
        paper:  '#f7f3ed',
        cream:  '#eee9df',
        accent: '#d94f2a',
        muted:  '#8a8680',
      },
      animation: {
        'blink':   'blink 1s step-end infinite',
        'marquee': 'marquee 24s linear infinite',
        'fadeUp':  'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity:'1' }, '50%': { opacity:'0' } },
        marquee: { from: { transform:'translateX(0)' }, to: { transform:'translateX(-50%)' } },
        fadeUp:  { from: { opacity:'0', transform:'translateY(20px)' }, to: { opacity:'1', transform:'none' } },
      },
    },
  },
  plugins: [],
}
