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
    imageBorder: 'rgba(0, 0, 0, 0.125)',
    imageBackground: 'transparent',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        chrome: '#333',
        chromeMenu: '#b8b8b8',
        chromeText: '#b8b8b8',
        primary: '#0cf',
        imageBorder: 'rgba(255, 255, 255, 0.825)',
        imageBackground: 'rgba(255, 255, 255, 0.125)',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      backgroundColor: 'imageBackground',
      boxShadow:
        '0 0 8px var(--theme-ui-colors-imageBorder, rgba(0, 0, 0, 0.125))',
    },
  },
  fonts: {
    body: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: '"Consolas,Monaco,Andale Mono,Menlo,monospace"',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    header: 400,
    footer: 400,
    heading: 600,
    bold: 700,
  },
  images: {
    blogPost: {
      display: 'block',
      padding: 0,
    },
  },
  layout: {
    blogPost: {
      boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5',
      mb: 3,
    },
    biblePassage: {
      fontFamily: 'Times New Roman',
      fontSize: '18px',
      fontStyle: 'italic',
      lineHeight: '1.625em',
      whiteSpace: 'pre-wrap',
    },
  },
  links: {
    header: {
      cursor: 'pointer',
      fontSize: '3',
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
    default: {
      lineHeight: '1.625rem',
      marginTop: '1em',
      marginBottom: '1em',
    },
    icon: {
      fontSize: '3',
    },
    heading: {
      mt: '1em',
      mb: '0.5em',
    },
    blogPost: {
      lineHeight: '1.625rem',
      marginTop: 0,
      marginBottom: '1em',
      p: '1em',
    },
  },
  styles: {
    a: {
      color: 'text',
    },
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
    code: {
      backgroundColor: 'gray',
      fontFamily: '"Consolas,Monaco,Andale Mono,Menlo,monospace"',
    },
  },
};
