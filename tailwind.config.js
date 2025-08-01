/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        rosewater: 'var(--rosewater)',
        flamingo: 'var(--flamingo)',
        pink: 'var(--pink)',
        mauve: 'var(--mauve)',
        red: 'var(--red)',
        maroon: 'var(--maroon)',
        peach: 'var(--peach)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        teal: 'var(--teal)',
        sky: 'var(--sky)',
        sapphire: 'var(--sapphire)',
        blue: 'var(--blue)',
        lavender: 'var(--lavender)',
        text: 'var(--text)',
        subtext1: 'var(--subtext1)',
        subtext0: 'var(--subtext0)',
        overlay2: 'var(--overlay2)',
        overlay1: 'var(--overlay1)',
        overlay0: 'var(--overlay0)',
        surface2: 'var(--surface2)',
        surface1: 'var(--surface1)',
        surface0: 'var(--surface0)',
        base: 'var(--base)',
        mantle: 'var(--mantle)',
        crust: 'var(--crust)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
