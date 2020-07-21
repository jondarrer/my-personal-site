export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
  fonts: {
    body: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
};
