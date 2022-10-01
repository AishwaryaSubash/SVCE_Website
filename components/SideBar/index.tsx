import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

import styles from "./SideBar.module.scss";
import cn from "classnames";

import { BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineAcademicCap, HiMenu } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { IoIosFlask } from "react-icons/io";
import { FaRegNewspaper, FaRegHandshake } from "react-icons/fa";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontFamily: "Nunito",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
  },
}));

const SideBar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <motion.div
      className={cn({
        [styles.container]: !clicked,
        [styles.clickedContainer]: clicked,
      })}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div
        className={cn({
          [styles.menu]: !clicked,
          [styles.clickedMenu]: clicked,
        })}
      >
        <motion.div
          className={cn({
            [styles.options]: !clicked,
            [styles.clickedOptions]: clicked,
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          onClick={() => setClicked(!clicked)}
        >
          {!clicked ? (
            <HiMenu />
          ) : (
            <div className={styles.logo}>
              <Image
                className={styles.image}
                src="/images/svce.png"
                alt="SVCE"
                width={150}
                height={25}
              />{" "}
              <BiMenuAltRight />
            </div>
          )}
        </motion.div>
        <motion.div
          className={cn({
            [styles.search]: !clicked,
            [styles.clickedSearch]: clicked,
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          onClick={() => setClicked(true)}
        >
          <div className={styles.inputContainer}>
            <BsSearch />
            {clicked && (
              <input className={styles.input} placeholder="Search..." />
            )}
          </div>
        </motion.div>
      </div>
      <motion.div
        className={cn({
          [styles.links]: !clicked,
          [styles.clickedLinks]: clicked,
        })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <LightTooltip
          title={!clicked ? "Academics" : ""}
          className={styles.tooltip}
          placement="right"
        >
          <motion.div
            className={cn({
              [styles.icons]: !clicked,
              [styles.clickedIcons]: clicked,
            })}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              !clicked
                ? {
                    scale: 1.2,
                    backgroundColor: `rgba(255,255,255,1)`,
                    color: "#11101d",
                  }
                : { scale: 0.95 }
            }
          >
            <div
              className={cn({
                [styles.textWrapper]: !clicked,
                [styles.clickedTextWrapper]: clicked,
              })}
            >
              <Link href="/Academics">
                <div>
                  <HiOutlineAcademicCap />
                </div>
              </Link>
              {clicked && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className={styles.clickedText}
                >
                  <Link href="/Academics">Academics</Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </LightTooltip>

        <LightTooltip title={!clicked ? "Placements" : ""} placement="right">
          <motion.div
            className={cn({
              [styles.icons]: !clicked,
              [styles.clickedIcons]: clicked,
            })}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              !clicked
                ? {
                    scale: 1.2,
                    backgroundColor: `rgba(255,255,255,1)`,
                    color: "#11101d",
                  }
                : { scale: 0.95 }
            }
          >
            <div
              className={cn({
                [styles.textWrapper]: !clicked,
                [styles.clickedTextWrapper]: clicked,
              })}
            >
              <Link href="/Placements">
                <div>
                  <SiBookstack />
                </div>
              </Link>

              {clicked && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={styles.clickedText}
                  transition={{ delay: 0.25 }}
                >
                  <Link href="/Placements">Placements</Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </LightTooltip>

        <LightTooltip title={!clicked ? "Research" : ""} placement="right">
          <motion.div
            className={cn({
              [styles.icons]: !clicked,
              [styles.clickedIcons]: clicked,
            })}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              !clicked
                ? {
                    scale: 1.2,
                    backgroundColor: `rgba(255,255,255,1)`,
                    color: "#11101d",
                  }
                : { scale: 0.95 }
            }
          >
            <div
              className={cn({
                [styles.textWrapper]: !clicked,
                [styles.clickedTextWrapper]: clicked,
              })}
            >
              <Link href="/Research">
                <div>
                  <IoIosFlask />
                </div>
              </Link>
              {clicked && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={styles.clickedText}
                  transition={{ delay: 0.25 }}
                >
                  <Link href="/Research">Research</Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </LightTooltip>

        <LightTooltip
          title={!clicked ? "News and Events" : ""}
          placement="right"
        >
          <motion.div
            className={cn({
              [styles.icons]: !clicked,
              [styles.clickedIcons]: clicked,
            })}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              !clicked
                ? {
                    scale: 1.2,
                    backgroundColor: `rgba(255,255,255,1)`,
                    color: "#11101d",
                  }
                : { scale: 0.95 }
            }
          >
            <div
              className={cn({
                [styles.textWrapper]: !clicked,
                [styles.clickedTextWrapper]: clicked,
              })}
            >
              <Link href="/NewsAndEvents">
                <div>
                  <FaRegNewspaper />
                </div>
              </Link>
              {clicked && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={styles.clickedText}
                  transition={{ delay: 0.25 }}
                >
                  <Link href="/NewsAndEvents">News and Events</Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </LightTooltip>

        <LightTooltip title={!clicked ? "Get in Touch" : ""} placement="right">
          <motion.div
            className={cn({
              [styles.icons]: !clicked,
              [styles.clickedIcons]: clicked,
            })}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: Infinity,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={
              !clicked
                ? {
                    scale: 1.2,
                    backgroundColor: `rgba(255,255,255,1)`,
                    color: "#11101d",
                  }
                : { scale: 0.95 }
            }
          >
            <div
              className={cn({
                [styles.textWrapper]: !clicked,
                [styles.clickedTextWrapper]: clicked,
              })}
            >
              <FaRegHandshake />
              {clicked && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={styles.clickedText}
                  transition={{ delay: 0.25 }}
                >
                  Get in Touch
                </motion.div>
              )}
            </div>
          </motion.div>
        </LightTooltip>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
