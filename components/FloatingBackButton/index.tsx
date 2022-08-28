import { createTheme, Fab, ThemeProvider } from "@mui/material";
import React from "react";
import styles from "./FloatingBackButton.module.scss";
import { DiAtom } from "react-icons/di";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1b31fa",
    },
  },
});
const FloatingBackButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="add">
            <DiAtom />
          </Fab>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default FloatingBackButton;
