/** @type {import('tailwindcss').Config} */
import {colors} from "./src/constants/colors";

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors
        },
    },
    plugins: [],
}