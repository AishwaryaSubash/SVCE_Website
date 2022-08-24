import React from "react";
import SideBar from "../../components/SideBar";
import styles from "./Academics.module.scss";
import ScienceIcon from "@mui/icons-material/Science";
const Academics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.emptyForAReason}></div>
      <div className={styles.departmentsC}>
        <div className={styles.dept}>
          <div className={styles.icon}>
            <ScienceIcon />
          </div>
          <div className={styles.content}> Information Technology </div>
        </div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
        <div className={styles.dept}>Information Technology</div>
      </div>
    </div>
  );
};

export default Academics;
