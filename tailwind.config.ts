import type { Config } from 'tailwindcss';
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {},
      colors: {
        "trashed-colors-white-80": "#ffffff",
        "trashed-colors-jade-100": "#e3fcf2",
        "trashed-colors-jade-500": "#075132",
        "trashed-colors-red-100": "#f9e3e0",
        "trashed-colors-red-400": "#961100",
        "trashed-colors-jade-400": "#0ea163",
        "trashed-colors-yellow-400": "#a77a07",
        "trashed-colors-white-100": "#ffffff",
        "trashed-colors-gray-100": "#dbdee5",
        "trashed-colors-orange-300-default": "#ff5403",
        "shake-white-100": "#ffffff",
        "gray-gray-50": "#eff1f6",
        "black-black-300": "#131316",
        "gray-gray-400": "#56616b",
        "gray-gray-300": "#888f95",
        "white-white-100": "#ffffff",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [nextui()],
}
export default config
