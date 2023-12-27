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
    }
  });