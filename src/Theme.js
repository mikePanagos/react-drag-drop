import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        type: 'dark',
        text: {
            primary: "#FFFFFF",
            secondary: "#000000",
        },
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        alert: {
            light: '#ff1111',
            main: '#ff0000',
            dark: '#aa0000',
            contrastText: '#000',
        },
        background: {

            default: '#303030',
            paper: '#555555',


        },
    },
});

