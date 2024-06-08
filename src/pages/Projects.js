import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
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
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(!loading);
      }, 3000);
    };
    fakeDataFetch();
  }, []);
  AOS.init({
    delay: 500,
    duration: 1000,
  });
  return !loading ? (
    <Loader />
  ) : (
    <motion.div className="container" variants={containerVariants} exit="exit">
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-6 d-grid justify-content-center align-content-center">
          <Tilt>
            <div
              className="card project-card project-card-1"
              data-aos="flip-right"
            >
              <div className="card-body">
                <div className="carousel slide carousel-fade" id="slider1">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#slider1"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider1"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider1"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/portfolio/img1.jpg"
                        alt="img1"
                        className="d-block w-100 "
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/portfolio/img2.jpg"
                        alt="img2"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/portfolio/img3.jpg"
                        alt="img3"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="carousel-control-prev"
                    data-bs-target="#slider1"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    type="button"
                    className="carousel-control-next"
                    data-bs-target="#slider1"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
                <div className="d-flex justify-content-evenly mt-3">
                  <motion.a
                    href=""
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    <FaGithub />
                    Git Hub
                  </motion.a>
                  <motion.a
                    href=""
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    Link
                  </motion.a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col-12 col-sm-12 col-md-6 d-grid justify-content-center align-content-center">
          <Tilt>
            <div
              className="card project-card project-card-2"
              data-aos="flip-left"
            >
              <div className="card-body">
                <div className="carousel slide carousel-fade" id="slider2">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#slider2"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider2"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider2"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/ecommerce/img1.jpg"
                        alt="img1"
                        className="d-block w-100 "
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/ecommerce/img2.jpg"
                        alt="img2"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/ecommerce/img3.jpg"
                        alt="img3"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="carousel-control-prev"
                    data-bs-target="#slider2"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    type="button"
                    className="carousel-control-next"
                    data-bs-target="#slider2"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
                <div className="d-flex justify-content-evenly mt-3">
                  <motion.a
                    href="https://github.com/ramkumarudhayakumar/Amazon-Clone-Website.git"
                    target="blank"
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    <FaGithub />
                    Git Hub
                  </motion.a>
                  <motion.a
                    href=""
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    Link
                  </motion.a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col-12 d-grid justify-content-center align-content-center">
          <Tilt>
            <div className="card project-card" data-aos="flip-up">
              <div className="card-body">
                <div className="carousel slide carousel-fade" id="slider3">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#slider3"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider3"
                      data-bs-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#slider3"
                      data-bs-slide-to="2"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/taxi-app/img1.jpg"
                        alt="img1"
                        className="d-block w-100 "
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/taxi-app/img2.jpg"
                        alt="img2"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/taxi-app/img3.jpg"
                        alt="img3"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="carousel-control-prev"
                    data-bs-target="#slider3"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button
                    type="button"
                    className="carousel-control-next"
                    data-bs-target="#slider3"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
                <div className="d-flex justify-content-evenly mt-3">
                  <motion.a
                    href="https://github.com/ramkumarudhayakumar/Taxi-App.git"
                    target="blank"
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    <FaGithub />
                    Git Hub
                  </motion.a>
                  <motion.a
                    href="https://friendly-taxis-driver-d7727.web.app/"
                    target="blank"
                    className="text-decoration-none project-button"
                    variants={btnVariants}
                    whileHover="hover"
                  >
                    Link
                  </motion.a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </motion.div>
  );
}
