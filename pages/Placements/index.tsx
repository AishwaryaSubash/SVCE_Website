import React from "react";
import SideBar from "../../components/SideBar";
import { Statistics as s } from "../../Placement";
import CountUp from "react-countup";
import styles from "./Placements.module.scss";
import cn from "classnames";

const Placements = ({ select }: { select: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.emptyForAReason}></div>
      <div className={styles.innerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <div className={styles.content}>
              <div className={styles.heading}>Placement Cell in SVCE</div>
              <div className={styles.text}>
                The Placement cell is one of the important department in SVCE.
                Knowing that you will be guided after your graduation so that
                you land a job helps you feel secure. This is the reason why we
                have a dedicated placement cell that helps, guides, and advises
                students about the future. In SVCE, students come from all walks
                of lives. They come from different parts of the country
                including rural areas. Some individuals may not be aware of how
                things work. Some others may not be confident enough to walk
                into an interview even though they are skilled. These problems
                are more common and our skilled placement panel are helping
                students to get placed in top companies.
              </div>
              <div className={styles.heading}>Training</div>
              <div className={styles.text}>
                Placement training plays a major role in shaping up the career
                goals of students. It is the dream of every engineering student
                to get placed in a top organization visiting their campus for
                recruitment. Keeping this key aspect into consideration, it is
                realized that training is important for engineering students to
                enhance their employability skills and achieve good placement in
                various Industries.
              </div>
              <div className={styles.people}>
                <div className={styles.p1}>
                  <div className={styles.t1}>Chief Placement Officer</div>
                  Prof. S. Muraleedharan, MS, MBA ()
                </div>
                <div className={styles.p2}>
                  <div className={styles.t2}>Assistant Placement Officer</div>
                  Mr. E. Ramachandiran, M.Tech.
                </div>
                <div className={styles.p3}>
                  <div className={styles.t3}>Assistant Placement Officer</div>
                  Mr. A. K. Boobalasenthilraj, M.E. (Ph.D.,)
                </div>
                <div className={styles.p4}>
                  <div className={styles.t4}>Junior Assistant</div>
                  Mr. D. Pugazharasu, M.A., MCA.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stats}>
            {s.map((s, i) => {
              return (
                <div
                  key={i}
                  className={cn({
                    [styles.stats1]: s.id === 1,
                    [styles.stats2]: s.id === 2,
                    [styles.stats3]: s.id === 3,
                    [styles.stats4]: s.id === 4,
                    [styles.stats5]: s.id === 5,
                    [styles.stats6]: s.id === 6,
                    [styles.stats7]: s.id === 7,
                    [styles.stats8]: s.id === 8,
                    [styles.stats9]: s.id === 9,
                  })}
                >
                  <div className={styles.statList}> {s.name}</div>
                  <div>
                    <CountUp
                      start={5}
                      end={s.count}
                      duration={3}
                      decimals={s.id == 7 ? 2 : 0}
                      suffix={s.id == 7 ? "%" : ""}
                      onStart={() => console.log("hi")}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
