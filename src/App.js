import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, responsiveFontSizes } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Main from "./Main";
import Sidebar from "./Sidebar";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Exo", "sans-serif"],
    h1: {
      fontWeight: "600",
      fontSize: "42px"
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "36px"
    }
  },
  palette: {
    primary: { main: "#fb5b5a" },
    secondary: { main: "#003f5c" },
    background: { default: "#232323" }
  },
  shape: {
    borderRadius: "10px"
  }
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Main />
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}
