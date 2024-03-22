import { createTheme } from '@mui/material/styles';

export const themeYellow = createTheme({
    palette: {
        ochre: {
            main: '#f4b726',
            light: '#ffbe27',
            dark: '#A29415',
            contrastText: '#ffe726',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        ochre: Palette['primary'];
    }

    interface PaletteOptions {
        ochre?: PaletteOptions['primary'];
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
    }
}
