/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#8B4513",
          light: "#A0522D",
          dark: "#6B3811",
          50: "#F5EFE8",
          100: "#E8D8C3",
          200: "#D4B795",
          300: "#C09A72",
          400: "#A67C4E",
        },
        green: {
          DEFAULT: "#4CAF50",
          light: "#8BC34A",
          dark: "#2E7D32",
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
        },
        blue: {
          DEFAULT: "#2196F3",
          light: "#64B5F6",
          dark: "#1565C0",
        },
        gold: "#D4AF37",
        background: "#FFFFFF",
        foreground: "#333333",
        muted: "#F5F5F5",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
}
