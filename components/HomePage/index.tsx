import React from "react";
import Image from "next/image";

import styles from "./HomePage.module.scss";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "../Card";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1b31",
    },
  },
});
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.img}>
          <Image
            className={styles.image}
            src="/images/svce.png"
            alt="SVCE"
            width={230}
            height={50}
          />
        </div>
        <div className={styles.btn}>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={styles.muiBtn}
            >
              Admission Enquiry
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.cards}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
