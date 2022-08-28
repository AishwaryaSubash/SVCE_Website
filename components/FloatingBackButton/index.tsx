import { createTheme, Fab, ThemeProvider } from "@mui/material";
import React from "react";
import styles from "./FloatingBackButton.module.scss";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1b31fa",
    },
  },
});
const FloatingBackButton = () => {
  return (
    <div className={styles.button}>
      <ThemeProvider theme={theme}>
        <Link href="/">
          <Fab color="primary" aria-label="add">
            <div className={styles.icon}>
              <IoHome />
            </div>
          </Fab>
        </Link>
      </ThemeProvider>
    </div>
  );
};

export default FloatingBackButton;
