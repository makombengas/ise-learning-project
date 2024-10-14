/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
        },
        "fade-out": {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            },
        },
        "fade-in-down": {
            "0%": {
                opacity: 0,
                transform: "translate3d(0, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-top-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-top-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, -100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },

        "fade-in-bottom-left": {
            "0%": {
                opacity: 0,
                transform: "translate3d(100%, 100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
        "fade-in-bottom-right": {
            "0%": {
                opacity: 0,
                transform: "translate3d(-100%, 100%, 0)",
            },
            "100%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
        },
      },
    },
    fontFamily: {
      geist: ["var(--font-geist-sans)"],
      geistMono: ["var(--font-geist-mono)"],
    },
  },
  plugins: [],
};
