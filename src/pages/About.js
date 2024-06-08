import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
const btnVariants = {
  hover: {
    scale: 1.1,
    transition: { ease: "easeInOut" },
  },
};
export default function About() {
  const [loading, setLoading] = useState(false);
  const [readPara, setReadPara] = useState(false);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(!loading);
      }, 3000);
    };
    fakeDataFetch();
  }, []);

  function paraHandler() {
    setReadPara(!readPara);
  }
  AOS.init({
    delay: 500,
    duration: 1000,
  });
  return !loading ? (
    <Loader />
  ) : (
    <motion.div className="container" variants={containerVariants} exit="exit">
      <div className="row">
        <div
          className="col d-grid  justify-content-center align-content-center about-col mb-3"
          data-aos="zoom-in"
        >
          <div className="card about-card">
            <div className="card-body about-card-body d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center p-3">
                About <span style={{ color: "#ff6e00" }}>Me</span>
              </h1>
              <p>
                As a passionate and dedicated web developer, I specialize in
                creating dynamic and responsive web applications using a suite
                of modern technologies including React, JavaScript, HTML, CSS,
                and MongoDB. With a strong foundation in front-end development,
                I excel at designing user-friendly interfaces and seamless user
                experiences.
                <br />{" "}
                {readPara &&
                  `Throughout my academic and project work, I have honed my
                skills in developing scalable web applications and leveraging
                MongoDB for efficient data management. My commitment to
                continuous learning and staying updated with industry trends
                ensures that I bring innovative solutions to the table.
                <br /> I am eager to contribute to a dynamic team where I can
                apply my skills and grow as a professional. If you are looking
                for a proactive and fast-learning developer with a keen eye for
                detail and a passion for technology, I would love to connect and
                explore opportunities.`}
              </p>
              <motion.button
                className="btn text-center"
                onClick={paraHandler}
                variants={btnVariants}
                whileHover="hover"
              >
                Read More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
