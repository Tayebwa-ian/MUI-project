import { lime } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            contained: {
                fontSize: '0.875rem'
            },
        },
      },
    },
    palette: {
        primary: lime
    },
    typography: {
      h1: {
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '0.5px',
          textTransform: 'capitalize',
      },
  },
  });