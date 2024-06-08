import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: "-50vh",
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
export default function Nav({ navRef }) {
  return (
    <motion.nav
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="list-inline d-flex flex-column flex-sm-row flex-md-row gap-2">
        <li className="list-inline-item active">
          <NavLink to="/" className="text-decoration-none  fw-bold fs-5">
            HOME
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink to="/about" className="text-decoration-none  fw-bold fs-5">
            ABOUT
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink to="/resume" className="text-decoration-none  fw-bold fs-5">
            RESUME
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink
            to="/projects"
            className="text-decoration-none  fw-bold fs-5"
          >
            PROJECTS
          </NavLink>
        </li>
        {/* <li className="list-inline-item">
          <a href="#hireme" className="text-decoration-none  fw-bold fs-5">
            HIRE ME
          </a>
        </li> */}
      </ul>
    </motion.nav>
  );
}
