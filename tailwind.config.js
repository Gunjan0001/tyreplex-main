/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "72px",
      },
      colors: {
        primary: "#4D8AFF",
        secondary: "#FF0000",
        tertiary: "#303135",
        grey: "#BEC1C3",
        light: {
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F8F8F8",
          400: "#EEEFEF",
        },
      },
      boxShadow: {
        custom: "0px 8px 20px 0px #2F327D1A",
      },
      backgroundImage:{
        'warranty': "url('/src/assets/images/png/warranty.png')",
      }
    },
  },
};
