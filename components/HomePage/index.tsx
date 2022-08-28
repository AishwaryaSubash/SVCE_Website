import React from "react";
import Image from "next/image";

import styles from "./HomePage.module.scss";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { motion } from "framer-motion";
import WhySvce from "../WhySvce";
import { Grid, useMediaQuery } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d1b31",
    },
  },
});
const HomePage = () => {
  const fontSelect = useMediaQuery("(max-width:600px)");
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
        {/* <div className={styles.cards}>
          <div className={styles.summa}>

          <WhySvce delay={0.3} />
          </div>
          <WhySvce delay={0.6} />
          <WhySvce delay={0.9} />
          <WhySvce delay={1.2} />
          <WhySvce delay={1.5} />
          <WhySvce delay={1.8} />
          <WhySvce delay={2.1} />
          <WhySvce delay={2.4} />
        </div> */}
        <div className={styles.gridC}>
          <Grid
            container
            item={true}
            spacing={2}
            xs={12}
            className={styles.mainGrid}
          >
            <Grid
              container
              item={true}
              xs={6}
              rowSpacing={2}
              className={styles.childGrid}
            >
              <Grid item={true} xs={12} className={styles.childGrid}>
                <WhySvce
                  delay={0.3}
                  height={`100%`}
                  picture={"/images/certified-icon.svg"}
                  text={"Accredited by NAAC and NBA"}
                  bgColor={"#A1BE95"}
                  fontSize={!fontSelect ? 35 : 20}
                  fontWeight={!fontSelect ? 900 : 600}
                  x={-100}
                  y={0}
                  duration={1}
                />
              </Grid>
              <Grid item={true} xs={12} className={styles.childGrid}>
                <WhySvce
                  delay={0.6}
                  height={`100%`}
                  picture={"/images/amazon.svg"}
                  text={
                    "Highest placement offers of Rs.25 LPA and 20 LPA in Amazon"
                  }
                  bgColor={"#E2DFA2"}
                  fontSize={!fontSelect ? 35 : 20}
                  fontWeight={!fontSelect ? 900 : 600}
                  x={-100}
                  y={0}
                  duration={1}
                />
              </Grid>
            </Grid>
            <Grid container item={true} xs={6} className={styles.childGrid}>
              <Grid item={true} xs={12}>
                <WhySvce
                  delay={0.9}
                  height={`100%`}
                  picture={"/images/badge.svg"}
                  text={
                    "One of the top ranked engineering Insitutes affiliated to Anna University"
                  }
                  bgColor={"#92AAC7"}
                  fontSize={!fontSelect ? 50 : 20}
                  fontWeight={!fontSelect ? 900 : 600}
                  x={0}
                  y={-100}
                  duration={1}
                />
              </Grid>
            </Grid>
            <Grid container item={true} xs={12} className={styles.childGrid}>
              <Grid item={true} xs={12}>
                <WhySvce
                  delay={0.9}
                  height={`100%`}
                  picture={"/images/exmployee.svg"}
                  text={
                    "High qualified faculty and staff with an average experience of over 20 years"
                  }
                  bgColor={" #5BC8AC"}
                  fontSize={!fontSelect ? 35 : 20}
                  fontWeight={!fontSelect ? 900 : 600}
                  x={0}
                  y={0}
                  duration={1}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item={true}
              xs={12}
              spacing={2}
              className={styles.childGrid}
            >
              <Grid item={true} xs={6} className={styles.childGrid}>
                <WhySvce
                  delay={0.3}
                  height={`100%`}
                  picture={"/images/world-svgrepo-com.svg"}
                  text={"Over 28% of the alumni work abroad"}
                  bgColor={"#98DBC6"}
                  fontSize={!fontSelect ? 50 : 20}
                  fontWeight={!fontSelect ? 900 : 600}
                  x={0}
                  y={100}
                  duration={1}
                />
              </Grid>
              <Grid
                container
                item={true}
                xs={6}
                rowSpacing={2}
                className={styles.childGrid}
              >
                <Grid item={true} xs={12}>
                  <WhySvce
                    delay={0.3}
                    height={`100%`}
                    picture={"/images/flask.svg"}
                    text={
                      "World class Laboratories to foster innovation and research"
                    }
                    bgColor={"#F18D9E"}
                    fontSize={!fontSelect ? 35 : 20}
                    fontWeight={!fontSelect ? 900 : 600}
                    x={100}
                    y={0}
                    duration={1}
                  />
                </Grid>
                <Grid item={true} xs={12} className={styles.childGrid}>
                  <WhySvce
                    delay={0.3}
                    height={`100%`}
                    picture={"/images/org.svg"}
                    text={
                      "Alumni working in fortune 500 companies like Google, Microsoft, Facebook, Mercedes Benz, etc"
                    }
                    bgColor={"#D9B44A"}
                    fontSize={!fontSelect ? 35 : 20}
                    fontWeight={!fontSelect ? 900 : 600}
                    x={100}
                    y={0}
                    duration={1}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
