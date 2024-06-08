import React, { useState, useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      damping: 10,
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer variants={footerVariants} initial="hidden" animate="visible">
      <div className="container ">
        <div className="row my-5">
          <div className="col-12 col-md-4  d-flex justify-content-center justify-content-md-end align-items-center">
            <img src="images/footer-image.png" style={{ height: "200px" }} />
          </div>
          <div className="col-12 col-md-4  d-grid justify-content-md-start justify-content-md-start align-content-center ">
            <div className="d-grid  justify-content-center mb-3">
              <h3 className="fw-bold mb-3" style={{ color: "#ff6e00" }}>
                Find me on
              </h3>
              <p className="fw-bold footer-p">
                <MdOutlinePhoneIphone className="me-3 mb-1 footer-icon-p" />
                9361321282
              </p>
              <p className="fw-bold footer-p">
                <CgMail className="me-3 footer-icon-p" />
                ramkumarudhayakumar@gmail.com
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-5">
              <span className="circle">
                <a
                  href="https://www.instagram.com/itz_.me_.beast/"
                  target="blank"
                  className="d-flex align-items-center"
                  style={{ color: "#b100cd" }}
                >
                  <FaInstagramSquare />
                </a>
              </span>
              <span className="circle">
                <a
                  href="https://github.com/ramkumarudhayakumar"
                  target="blank"
                  className="d-flex align-items-center"
                  style={{ color: "var(--background-color)" }}
                >
                  <FaGithub />
                </a>
              </span>
              <span className="circle">
                <a
                  href=" https://www.linkedin.com/in/contactramkumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                  className="d-flex align-items-center"
                  style={{ color: "#0762c8" }}
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="circle">
                <a
                  href="https://wa.me/message/P77LITPPCV7NB1"
                  target="blank"
                  className="d-flex align-items-center"
                  style={{ color: "#25d366" }}
                >
                  <IoLogoWhatsapp />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
