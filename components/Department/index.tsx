import React from "react";
import styles from "./Department.module.scss";
import { Departments as d, Dept } from "./departments";
const Department = ({ select }: { select: number }) => {
  // console.log(Departments[11])
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.name}>{d[select].name}</div>
        <div className={styles.content}>{d[select].content}</div>
        {/* <div className={styles.text}>
          
        </div> */}
        <div className={styles.missionVision}>
          <div className={styles.vision}>
            <div className={styles.text}>Vision</div>
            <div className={styles.visionContent}>{d[select].vision}</div>
          </div>
          <ol className={styles.mission}>
            <div className={styles.text}>Mission</div>
            <div className={styles.missionContent}>
              {d[select].mission.map((mission, i) => {
                return (
                  <li key={i} className={styles.missionList}>
                    {mission}
                  </li>
                );
              })}
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Department;
