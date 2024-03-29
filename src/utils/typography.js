import Typography from "typography"

const options = {

  baseFontSize: `18px`,
  baseLineHeight: 1.4,
  headerColor: `hsla(0,0%,0%,0.8)`,
  bodyColor: `hsla(0,0%,0%,0.7)`,
  blockMarginBottom: 0.75,
  headerFontFamily: [`sans-serif`],
  bodyFontFamily: [`sans-serif`],
  overrideStyles: () => {
    return {
      html: {
        overflowY: `scroll`,
      },
      h1: {
        lineHeight: 1.1,
      },
      a: {
        color: `#3897f0`,
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

module.exports = typography
