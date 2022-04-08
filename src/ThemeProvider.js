import React from 'react'
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ThemeProviderRoot ({ children }) {// eslint-disable-next-line

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default ThemeProviderRoot
