import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Lato", "Helvetica", "sans-serif"],
  overrideStyles: () => ({
    [`h1, h2, h3, h4, h5, h6`]: { marginBottom: "10px" }
  })
});

export default typography;
