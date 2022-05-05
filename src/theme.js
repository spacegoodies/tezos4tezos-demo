import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet_portrait: 750,
      tablet: 1050,
      laptop: 1400,
      desktop: 1700,
      maximum: 2050,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#939ef5',
    },
    secondary: {
      main: '#f88dff',
    },
    background: {
      default: '#0b0f19',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontSize: '0.6rem',
          fontWeight: '600',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: '2.8rem',
};

theme.typography.body2 = {
  fontSize: '0.7rem',
  lineHeight: 1.5,
};

export default theme;
