/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                sm: '1.2rem',
                base: '1.5rem',
                xl: '2.25rem',
                '2xl': '3.563rem',
                '3xl': '3.953rem',
                '4xl': '3.441rem',
                '5xl': '4.052rem',
            }
        },
    },
    plugins: [],
}