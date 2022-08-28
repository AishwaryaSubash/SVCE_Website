import styles from "./Background.module.scss";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <svg
      id="visual"
      className={styles.svg}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="#001220"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      ></motion.rect>
      <defs>
        <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#d81e5d"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_2" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#a8226f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#d81e5d"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_3" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#a8226f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#712b6f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_4" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#3c2b5f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#712b6f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_5" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#3c2b5f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#112142"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad1_6" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#001220"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#112142"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#d81e5d"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#fa3c3c"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_2" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#d81e5d"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#a8226f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_3" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#712b6f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#a8226f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_4" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#712b6f"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#3c2b5f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_5" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#112142"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#3c2b5f"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="grad2_6" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#112142"
            stopOpacity="1"
          ></stop>
          <stop
            offset="85.55555555555554%"
            stopColor="#001220"
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <g transform="translate(960, 0)" className={styles.g}>
        <motion.path
          d="M0 540C-91.2 521.3 -182.5 502.5 -265.5 459.9C-348.5 417.2 -423.3 350.6 -467.7 270C-512 189.4 -526 94.7 -540 0L0 0Z"
          fill="#051a31"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2 }}
        ></motion.path>
        <motion.path
          d="M0 462.9C-78.2 446.8 -156.4 430.7 -227.6 394.2C-298.7 357.6 -362.8 300.5 -400.8 231.4C-438.9 162.3 -450.9 81.2 -462.9 0L0 0Z"
          fill="#252752"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.path>
        <motion.path
          d="M0 385.7C-65.2 372.3 -130.4 358.9 -189.6 328.5C-248.9 298 -302.3 250.4 -334 192.9C-365.7 135.3 -375.7 67.6 -385.7 0L0 0Z"
          fill="#552c69"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        ></motion.path>
        <motion.path
          d="M0 308.6C-52.1 297.9 -104.3 287.2 -151.7 262.8C-199.1 238.4 -241.9 200.4 -267.2 154.3C-292.6 108.2 -300.6 54.1 -308.6 0L0 0Z"
          fill="#8d2871"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        ></motion.path>
        <motion.path
          d="M0 231.4C-39.1 223.4 -78.2 215.4 -113.8 197.1C-149.4 178.8 -181.4 150.3 -200.4 115.7C-219.4 81.2 -225.4 40.6 -231.4 0L0 0Z"
          fill="#c21d68"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        ></motion.path>
        <motion.path
          d="M0 154.3C-26.1 148.9 -52.1 143.6 -75.9 131.4C-99.6 119.2 -120.9 100.2 -133.6 77.1C-146.3 54.1 -150.3 27.1 -154.3 0L0 0Z"
          fill="#eb294e"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.path>
        <motion.path
          d="M0 77.1C-13 74.5 -26.1 71.8 -37.9 65.7C-49.8 59.6 -60.5 50.1 -66.8 38.6C-73.1 27.1 -75.1 13.5 -77.1 0L0 0Z"
          fill="#fa3c3c"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.path>
      </g>
      <g transform="translate(0, 540)" className={styles.gg}>
        <motion.path
          d="M0 -540C94.5 -525.9 188.9 -511.8 270 -467.7C351.1 -423.5 418.8 -349.4 461.6 -266.5C504.4 -183.6 522.2 -91.8 540 0L0 0Z"
          fill="#051a31"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2 }}
        ></motion.path>
        <motion.path
          d="M0 -462.9C81 -450.8 161.9 -438.7 231.4 -400.8C300.9 -363 359 -299.5 395.6 -228.4C432.3 -157.3 447.6 -78.7 462.9 0L0 0Z"
          fill="#252752"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.path>
        <motion.path
          d="M0 -385.7C67.5 -375.6 134.9 -365.5 192.9 -334C250.8 -302.5 299.2 -249.6 329.7 -190.4C360.3 -131.1 373 -65.6 385.7 0L0 0Z"
          fill="#552c69"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        ></motion.path>
        <motion.path
          d="M0 -308.6C54 -300.5 107.9 -292.4 154.3 -267.2C200.6 -242 239.3 -199.7 263.8 -152.3C288.2 -104.9 298.4 -52.4 308.6 0L0 0Z"
          fill="#8d2871"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        ></motion.path>
        <motion.path
          d="M0 -231.4C40.5 -225.4 81 -219.3 115.7 -200.4C150.5 -181.5 179.5 -149.8 197.8 -114.2C216.2 -78.7 223.8 -39.3 231.4 0L0 0Z"
          fill="#c21d68"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        ></motion.path>
        <motion.path
          d="M0 -154.3C27 -150.3 54 -146.2 77.1 -133.6C100.3 -121 119.7 -99.8 131.9 -76.1C144.1 -52.4 149.2 -26.2 154.3 0L0 0Z"
          fill="#eb294e"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.path>
        <motion.path
          d="M0 -77.1C13.5 -75.1 27 -73.1 38.6 -66.8C50.2 -60.5 59.8 -49.9 65.9 -38.1C72.1 -26.2 74.6 -13.1 77.1 0L0 0Z"
          fill="#fa3c3c"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.path>
      </g>
    </svg>
  );
};

export default Background;
