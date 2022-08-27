import React from "react";
import Image from "next/image";
import styles from "./WhySvce.module.scss";
import { motion } from "framer-motion";
const WhySvce = ({ delay, height }: { delay: number; height: string }) => {
  return (
    <motion.div
      className={styles.outerContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      style={{ height }}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/emblem.jpg"
            width={75}
            height={75}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            One of the top ranked engineering institutes affiliated to Anna
            University
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhySvce;
