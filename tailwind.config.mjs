/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
          colors: {
            primary: '#1D4ED8',
            secondary: '#9333EA',
            accent: '#F59E0B',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
        },
      },
	plugins: [],
}