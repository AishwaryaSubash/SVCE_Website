import { useMediaQuery } from "@mui/material";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import styles from "./NewsAndEvents.module.scss";
const Background2 = dynamic(() => import("../../components/Background2"), {
  ssr: false,
});
interface ItemType {
  id: string;
  title: string;
  content: string;
  src: string;
}

function Item({ item, key }: { item: ItemType; key: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      className={styles.li}
      layout
      layoutId={item.id}
      key={key}
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <motion.div layout className={styles.listContainer}>
        <div className={styles.avatar}>
          <Image className={styles.image} src={item.src} width={50} height={50} alt={`NEWS`}/>
        </div>
        <div>{item.title}</div>
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content content={item.content} />}
      </AnimatePresence>
    </motion.li>
  );
}
function Content({ content }: { content: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.row}>{content}</div>
    </motion.div>
  );
}

const items: ItemType[] = [
  {
    id: "0",
    title: "Fee Payment Online",
    content: "On 26/05/21, by admin, under College Circular",
    src: "/images/news.jpg",
  },
  {
    id: "1",
    title: "College Library No Due Certificate for Final Year UG/PG Students",
    content:
      "On 25/09/20, by admin, under College Circular. UG & PG_Final Year Students_Return_Books & Cards_Circular_2020 September",
    src: "/images/news.jpg",
  },
  {
    id: "2",
    title: "Schedule and Seating arrangement for CAT-1 commencing 30.01.2020",
    content:
      "On 28/01/20, by admin, under Schedule and Seating arrangement for CAT-1 commencing 30.01.2020",
    src: "/images/news.jpg",
  },
  {
    id: "3",
    title:
      "Issue of Provisional Certificate in respect of April / May 2019 AU Examination",
    content:
      "Students who have qualified for B.E./B.TECH degree during April/May 2019 AU Examinations, are requested to collect their Provisional Certificate, Consolidated Mark sheet & final semester mark sheet from the Academic section of College Office during working hours.",
    src: "/images/news.jpg",
  },
  {
    id: "4",
    title:
      "NOV./DEC. 2019 ANNA UNIVERSITY EXAMINATIONS Payment of Examination fee",
    content: `Passed out students are requested to contact A2 section of College Office for registration and payment of examination fees in respect of Nov./Dec. 2019 ANNA UNIVERSITY EXAMINATIONS.
              The last date for registration and payment of examination fee is 3rd Oct. 2019. (2.30 pm)
              PRINCIPAL.`,
    src: "/images/news.jpg",
  },
  {
    id: "5",
    title: "SVCE-IIC-CHENNAI EARNED III and IV GOLDEN STARS",
    content:
      "It is very much happy to share that our Institute's IIC has earned the THIRD and FOURTH GOLDEN STARS based on our performance and activities during academic year 2018-19. Behalf of Institution Innovation Council of SVCE, we take this opportunity to thank our Secretary , Principal, Vice Principal, Department IIC Coordinators and Members, Faculty, staff members and students helped us to earn Four Golden Stars.",
    src: "/images/news.jpg",
  },
  {
    id: "6",
    title: "Awardees of Management Scholarships – ODD Semester 2019-2020",
    content: `MANAGEMENT IS PLEASED TO DECLARE SCHOLARSHIPS FOR ODD SEMESTER 2019-20.
              STUDENTS ARE REQUIRED TO SUBMIT DETAILS IN THE FOLLOWING FORMAT TO ACCOUNTS SECTION TO TRANSFER SCHOLARSHIP AMOUNT TO RESPECTIVE BANK ACCOUNT.
              Click here to view and downloadform and the list of students
              Dr. J. Venkatesan
              Dean (Students' Welfare)
              Prof. & Head - Automobile Engineering`,
    src: "/images/news.jpg",
  },
  {
    id: "7",
    title:
      "Commencement of classes for the academic year 2019-20 (Even Semester)",
    content: "On 21/01/20, by admin, under College Circular",
    src: "/images/news.jpg",
  },
  {
    id: "8",
    title:
      "CIRCULAR (REVISED) – Commencement of classes – II Semester UG – 2019-20 (Even Semester)",
    content: "On 21/01/20, by admin, under College Circular",
    src: "/images/news.jpg",
  },
  {
    id: "9",
    title: "Graduation Day for 2015-19 Batch on 25.01.2020",
    content: `Dear Alumni,
              We are happy to inform you that the college is planning to conduct the Graduation Ceremony for 2015-19 Batch on Saturday, 25th January 2020.
              Kindly note that, the function will be held in our College campus at "His Holiness Sri Jayendra Saraswathi Platinum Jubilee Complex Multipurpose Hall". The function will start around 1.30 pm. All the Graduands should be present for the rehearsal at 09.30 am in the venue. The detailed programme will be uploaded shortly in the website.
              Kindly send your acceptance by post/e-mail or in person to the respective department HoDs on or before 13th January 2020.`,
    src: "/images/news.jpg",
  },
];

const NewsAndEvents = () => {
  const showSideBar = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <div className={styles.bg}>
        <Background2 />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Sri Venkateswara College of Engineering</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        {!showSideBar && <div className={styles.emptyForAReason}></div>}
        <div className={styles.innerContainer}>
          <h1 className={styles.header}>News And Events</h1>
          <LayoutGroup>
            <motion.ul
              className={styles.ul}
              layout
              initial={{ borderRadius: 25 }}
            >
              {items.map((item, i) => (
                <div key={i}>
                  <Item item={item} key={i} />
                </div>
              ))}
            </motion.ul>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
