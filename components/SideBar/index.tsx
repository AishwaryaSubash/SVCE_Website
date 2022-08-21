import React, { useState } from "react";

import styles from "./SideBar.module.scss";
import cn from "classnames";

import { BsSearch } from "react-icons/bs";
import { HiOutlineAcademicCap, HiMenu } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { IoIosFlask } from "react-icons/io";
import { FaRegNewspaper, FaRegHandshake } from "react-icons/fa";
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { motion } from "framer-motion";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
    fontFamily: "Crimson Pro",
    padding: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SideBar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={cn({
        [styles.container]: !clicked,
        [styles.clickedContainer]: clicked,
      })}
    >
      <div
        className={cn({
          [styles.menu]: !clicked,
          [styles.clickedMenu]: clicked,
        })}
      >
        <div
          className={cn({
            [styles.options]: !clicked,
            [styles.clickedOptions]: clicked,
          })}
          onClick={() => setClicked(!clicked)}
        >
          <HiMenu />
        </div>
        <div
          className={cn({
            [styles.search]: !clicked,
            [styles.clickedSearch]: clicked,
          })}
        >
          <BsSearch />
        </div>
      </div>
      <div className={styles.links}>
        <LightTooltip title={!clicked ? "Academics" : ""} placement="right">
          <motion.div
            className={styles.icons}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "#11101d",
              opacity: 1,
            }}
          >
            <HiOutlineAcademicCap />
          </motion.div>
        </LightTooltip>
        <LightTooltip title={!clicked ? "Placements" : ""} placement="right">
          <motion.div
            className={styles.icons}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "#11101d",
              opacity: 1,
            }}
          >
            <SiBookstack />
          </motion.div>
        </LightTooltip>

        <LightTooltip title={!clicked ? "Research" : ""} placement="right">
          <motion.div
            className={styles.icons}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "#11101d",
              opacity: 1,
            }}
          >
            <IoIosFlask />
          </motion.div>
        </LightTooltip>

        <LightTooltip
          title={!clicked ? "News and Events" : ""}
          placement="right"
        >
          <motion.div
            className={styles.icons}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "#11101d",
              opacity: 1,
            }}
          >
            <FaRegNewspaper />
          </motion.div>
        </LightTooltip>

        <LightTooltip title={!clicked ? "Get in Touch" : ""} placement="right">
          <motion.div
            className={styles.icons}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
              color: "#11101d",
              opacity: 1,
            }}
          >
            <FaRegHandshake />
          </motion.div>
        </LightTooltip>
      </div>
    </div>
  );
};

export default SideBar;
