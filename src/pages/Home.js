import React, { useEffect, useState } from "react";
import { FaPenFancy } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const containerVariants = {
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};
const col1Variants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      damping: 10,
      type: "spring",
      stiffness: 100,
    },
  },
};
const col2Variants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      damping: 10,
      type: "spring",
      stiffness: 100,
    },
  },
};
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(!loading);
      }, 3000);
    };
    fakeDataFetch();
  }, []);
  return !loading ? (
    <Loader />
  ) : (
    <motion.main className="my-5" variants={containerVariants} exit="exit">
      <div className="row">
        <motion.div
          className="col-12 col-md-6 d-grid gap-3 justify-content-center align-content-center  home-col-1 "
          variants={col1Variants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="">
            I'm&nbsp;
            <span className="" style={{ color: "#ff6e00" }}>
              <Typewriter
                words={[
                  "Web Developer",
                  "Frontend Developer",
                  "React Js Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle={<FaPenFancy />}
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
            <br />
            Ramkumar
          </h3>
          <p className="fw-bold">
            This is my official porfolio website to showcase my all works
            related to web development
          </p>
          <button className="btn d-grid justify-content-start align-content-start home-button">
            <a
              className="text-decoration-none fw-bold ms-3"
              href="images/pdfresumae.rk.pdf"
              download="resumae_of_rk"
              target="blank"
            >
              Download cv
            </a>
          </button>
        </motion.div>
        <motion.div
          className="col-12 col-md-6 d-flex justify-content-center align-items-center"
          variants={col2Variants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="images/pattern.png"
            className="back-img"
            style={{ height: "400px" }}
          />
          <img
            src="images/image.webp"
            className="align-self-center position-absolute main-img"
            style={{
              height: "200px",
            }}
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
