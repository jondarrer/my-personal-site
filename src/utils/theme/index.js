export default {
  useColorSchemeMediaQuery: true,
  breakpoints: [23.438, 40, 64, 90].map((n) => n + 'em'),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    chrome: '#b8b8b8',
    chromeMenu: '#b8b8b8',
    chromeText: '#fff',
    primary: '#33e',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        chrome: '#333',
        chromeMenu: '#b8b8b8',
        chromeText: '#b8b8b8',
        primary: '#0cf',
      },
    },
  },
  fonts: {
    body: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    header: 400,
    footer: 400,
    heading: 600,
    bold: 700,
  },
  links: {
    header: {
      fontWeight: 'header',
      color: 'chromeText',
      '&:hover': {
        color: 'chromeText',
      },
      '&:focus': {
        color: 'chromeText',
      },
      '&:visited': {
        color: 'chromeText',
      },
    },
    footer: {
      fontWeight: 'footer',
      color: 'chromeText',
      '&:hover': {
        color: 'chromeText',
      },
      '&:focus': {
        color: 'chromeText',
      },
      '&:visited': {
        color: 'chromeText',
      },
    },
    slideOutMenu: {
      fontWeight: 'footer',
      fontSize: '3',
      color: 'chromeMenu',
      '&:hover': {
        color: 'chromeMenu',
      },
      '&:focus': {
        color: 'chromeMenu',
      },
      '&:visited': {
        color: 'chromeMenu',
      },
    },
  },
  text: {
    icon: {
      fontSize: 4,
    },
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
    },
    header: {
      backgroundColor: 'chrome',
      color: 'chromeText',
    },
    footer: {
      backgroundColor: 'chrome',
      color: 'chromeText',
    },
  },
};
