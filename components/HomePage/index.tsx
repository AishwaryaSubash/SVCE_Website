import React from "react";
import Image from "next/image";

import styles from "./HomePage.module.scss";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "../Card";
import { animate, motion } from "framer-motion";
import WhySvce from "../WhySvce";

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
        <motion.div
          className={styles.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <Image
            className={styles.image}
            src="/images/svce.png"
            alt="SVCE"
            width={210}
            height={50}
          />
        </motion.div>
        <motion.div
          className={styles.btn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={styles.muiBtn}
            >
              Admission Enquiry
            </Button>
          </ThemeProvider>
        </motion.div>
      </div>
      <div className={styles.body}>
        <div className={styles.whySvce}>Why SVCE?</div>
        <div className={styles.cards}>
          <WhySvce delay={0.3} />
          <WhySvce delay={0.6} />
          <WhySvce delay={0.9} />
          <WhySvce delay={1.2} />
          <WhySvce delay={1.5} />
          <WhySvce delay={1.8} />
          <WhySvce delay={2.1} />
          <WhySvce delay={2.4} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
