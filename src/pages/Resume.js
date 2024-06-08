import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Loader from "../components/Loader";

const containerVariants = {
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};
const btnVariants = {
  hover: {
    scale: 1.1,
    duration: 2,
    transition: {
      type: "spring",
      stiffness: 800,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
export default function Resume() {
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
    <motion.div className="container" variants={containerVariants} exit="exit">
      <div className="row">
        <div className="col">
          <div className="card resume-card">
            <img src="images/resume.img.jpg" />
            <div className="card-body">
              <div className="d-flex justify-content-around align-items-center my-3">
                <motion.a
                  href="images/resume.img.jpg"
                  download="RAM_KUMAR_U"
                  className="btn border border-0 resume-btn"
                  variants={btnVariants}
                  whileHover="hover"
                >
                  Download IMG
                </motion.a>
                <motion.a
                  href="images/resume.pdf.pdf"
                  download="RAM_KUMAR_U"
                  className="btn  border border-0 resume-btn"
                  variants={btnVariants}
                  whileHover="hover"
                >
                  Download PDF
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
