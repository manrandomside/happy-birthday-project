import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                display: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Warm Blue Primary Palette
                primary: {
                    50: "#f0f8ff", // Very light warm blue
                    100: "#e0efff", // Light warm blue
                    200: "#b8dfff", // Soft warm blue
                    300: "#7cc7ff", // Medium warm blue
                    400: "#3badff", // Bright warm blue
                    500: "#1e90ff", // Classic warm blue (main)
                    600: "#0f73e6", // Deep warm blue
                    700: "#0d5eb3", // Darker warm blue
                    800: "#0a4a80", // Very dark warm blue
                    900: "#083754", // Deepest warm blue
                },
                // Blue Secondary Palette (Light Blues)
                secondary: {
                    50: "#f0f9ff", // Very light sky blue
                    100: "#e0f2fe", // Light sky blue
                    200: "#bae6fd", // Soft sky blue
                    300: "#7dd3fc", // Medium sky blue
                    400: "#38bdf8", // Bright sky blue
                    500: "#0ea5e9", // Classic sky blue (main)
                    600: "#0284c7", // Deep sky blue
                    700: "#0369a1", // Darker sky blue
                    800: "#075985", // Very dark sky blue
                    900: "#0c4a6e", // Deepest sky blue
                },
                // Sophisticated Neutral Palette
                neutral: {
                    white: "#ffffff",
                    "off-white": "#fefefe",
                    "soft-gray": "#f8fafc",
                    "light-gray": "#f1f5f9",
                    "medium-gray": "#64748b",
                    charcoal: "#1e293b",
                    "dark-charcoal": "#0f172a",
                },
                // Accent Colors
                accent: {
                    gold: "#fbbf24",
                    "light-gold": "#fde68a",
                    coral: "#ff6b6b",
                    "light-coral": "#fca5a5",
                },
            },
            fontSize: {
                // Custom Typography Scale
                display: [
                    "4.5rem",
                    {
                        lineHeight: "1.1",
                        letterSpacing: "-0.025em",
                        fontWeight: "800",
                    },
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "1.2",
                        letterSpacing: "-0.02em",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "2.5rem",
                    {
                        lineHeight: "1.3",
                        letterSpacing: "-0.015em",
                        fontWeight: "600",
                    },
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "1.4",
                        letterSpacing: "-0.01em",
                        fontWeight: "600",
                    },
                ],
                "body-lg": [
                    "1.125rem",
                    {
                        lineHeight: "1.7",
                        fontWeight: "400",
                    },
                ],
                body: [
                    "1rem",
                    {
                        lineHeight: "1.6",
                        fontWeight: "400",
                    },
                ],
                small: [
                    "0.875rem",
                    {
                        lineHeight: "1.5",
                        fontWeight: "500",
                    },
                ],
                xs: [
                    "0.75rem",
                    {
                        lineHeight: "1.4",
                        fontWeight: "500",
                    },
                ],
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
                128: "32rem",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            boxShadow: {
                elegant:
                    "0 10px 25px -5px rgba(30, 144, 255, 0.1), 0 10px 10px -5px rgba(30, 144, 255, 0.04)",
                "elegant-lg":
                    "0 20px 40px -10px rgba(30, 144, 255, 0.15), 0 10px 15px -5px rgba(30, 144, 255, 0.08)",
                "elegant-xl": "0 25px 50px -12px rgba(30, 144, 255, 0.25)",
                romantic:
                    "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)",
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "warm-blue":
                    "linear-gradient(135deg, #1e90ff 0%, #3badff 25%, #7dd3fc 75%, #bae6fd 100%)",
                "blue-gradient":
                    "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 75%, #bae6fd 100%)",
                "hero-bg":
                    "linear-gradient(135deg, #f0f8ff 0%, #e0efff 25%, #f0f9ff 75%, #e0f2fe 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
                float: "float 4s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(-10px)" },
                    "50%": { transform: "translateY(10px)" },
                },
                bounceGentle: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },

    plugins: [
        forms,
        // Custom plugin for text gradient utilities
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-gradient-primary": {
                    background: "linear-gradient(135deg, #1e90ff, #0ea5e9)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    "background-clip": "text",
                },
                ".text-gradient-secondary": {
                    background: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    "background-clip": "text",
                },
                ".text-gradient-warm": {
                    background:
                        "linear-gradient(135deg, #1e90ff, #3badff, #0ea5e9)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    "background-clip": "text",
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
