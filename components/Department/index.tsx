import React from "react";
import styles from "./Department.module.scss";
import { Departments as d, Dept } from "./departments";
const Department = ({ select }: { select: number }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.name}>{d[select].name}</div>
        <div className={styles.content}>{d[select].content}</div>
        {d[select].mission.length !== 0 && d[select].vision !== "" ? (
          <div className={styles.missionVision}>
            <div className={styles.vision}>
              <div className={styles.text}>Vision</div>
              <div className={styles.visionContent}>{d[select].vision}</div>
            </div>
            <div className={styles.mission}>
              <div className={styles.text}>Mission</div>
              <div className={styles.missionContent}>
                {d[select].mission.map((mission, i) => {
                  return (
                    <div key={i} className={styles.missionList}>
                      {mission}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Department;
