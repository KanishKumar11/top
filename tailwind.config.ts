module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      "7md": { min: "700px" },
      sm: { max: "550px" },
      lg: { min: "1024px" },
      "12l": { max: "1200px" },
    },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_05": "#00000005",
          "900_e0": "#000000e0",
          "900_19": "#00000019",
        },
        deep_orange: {
          400: "#de7e47",
          800: "#c95230",
          900: "#b3490c",
          A100: "#f29e7d",
        },
        red: { 100: "#f7d3cf", 600: "#e44332", A700: "#ff0000" },
        blue_gray: {
          100: "#d1d1da",
          900: "#1b363f",
          "100_01": "#cdd5e0",
          "900_01": "#183a23",
        },
        indigo: { 50: "#e3e8ef", 900: "#113984", A200: "#635bff" },
        light_blue: { 600: "#009ee3" },
        deep_purple: { 100: "#dbd1fc", A200: "#8a60f6" },
        white: {
          A700_cc: "#ffffffcc",
          A700_96: "#ffffff96",
          A700_e5: "#ffffffe5",
          A700_23: "#ffffff23",
          A700: "#ffffff",
        },
        yellow: { 50: "#fefce4", 800: "#f7941f" },
        teal: { 700: "#008060" },
        gray: {
          100: "#f8f7f2",
          200: "#eeeeee",
          300: "#e5e5e5",
          400: "#b0b0b0",
          800: "#434343",
          900: "#141414",
          "900_02": "#2d0a09",
          "900_03": "#232720",
          "900_01": "#0e1116",
          "900_23": "#14141423",
          "800_96": "#4d4d4d96",
          "400_01": "#b0afaf",
          "100_01": "#f2f2f2",
        },
        orange: { 200: "#eccc7b" },
        blue: { 200: "#7fc2eb" },
      },
      boxShadow: {
        bs: "0px 2px  1px 0px #00000005",
        bs1: "12px 12px  24px 0px #00000005",
      },
      fontFamily: { oxygen: "Oxygen", roboto: "Roboto" },
      textShadow: { ts: "0px 0px  2px #0000007f" },
    },
  },
  plugins: [],
};
