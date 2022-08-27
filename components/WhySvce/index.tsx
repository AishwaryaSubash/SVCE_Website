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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id
            cursus metus aliquam. Tortor aliquam nulla facilisi cras fermentum
            odio eu feugiat pretium.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhySvce;
