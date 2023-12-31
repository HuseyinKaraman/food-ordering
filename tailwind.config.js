// ? https://tailwindcss.com/docs/configuration for more information
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                screens: {
                    xs: "375px",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1140px",
                    "2xl": "1140",
                },
            },
            colors: {
                primary: "#ffbe33",
                secondray: "#222831",
                danger:"#ff0000",
                success:"#00ff2f"
            },
            fontFamily: {
                dancing: ["Dancing Script", "cursive"],
                sans: ["Open Sans", "sans-serif"],
            },
            screens: {
                short: { raw: "(max-height: 30rem)" },
            },
        },
    },
    plugins: [],
};
