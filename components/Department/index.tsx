import { motion } from "framer-motion";
import React from "react";
import styles from "./Department.module.scss";
import { Departments as d } from "./departments";
const Department = ({ select }: { select: number }) => {
  return (
    <motion.div
      className={styles.outerContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className={styles.container}>
        <motion.div
          className={styles.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {d[select].name}
        </motion.div>
        <div className={styles.content}>{d[select].content}</div>
        {d[select].mission.length !== 0 && d[select].vision !== "" ? (
          <div className={styles.missionVision}>
            <motion.div
              className={styles.vision}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.text}>Vision</div>
              <div className={styles.visionContent}>{d[select].vision}</div>
            </motion.div>
            <motion.div
              className={styles.mission}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.text}>Mission</div>
              <div className={styles.missionContent}>
                {d[select].mission.map((mission, i) => {
                  return (
                    <motion.div
                      key={i}
                      className={styles.missionList}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {mission}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};

export default Department;
