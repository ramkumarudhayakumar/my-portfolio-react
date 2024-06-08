import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";

export default function Header() {
  const [icon, setIcon] = useState(false);
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  function iconHandler() {
    setIcon(!icon);
    document.body.classList.toggle("dark-theme");
  }
  function navBarHandler() {
    setNav(!nav);
    navRef.current.classList.add("nav");
  }
  function navBarRemoveHandler() {
    setNav(false);
    navRef.current.classList.remove("nav");
  }
  return (
    <header className="sticky-top mb-5 mt-3">
      <div className="row d-flex align-items-center">
        <div className="col-6 mt-3">
          <motion.img
            src="images/logo.png"
            width="80px"
            height="80px"
            className="logo ms-4"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 40,
            }}
          />
        </div>
        <div className="col-4 mt-3 d-flex justify-content-end ">
          <Nav navRef={navRef} />
          <div className="ms-4 nav-bar" style={{ color: "var(--color)" }}>
            {!nav ? (
              <FaBarsStaggered onClick={navBarHandler} />
            ) : (
              <MdOutlineCancel onClick={navBarRemoveHandler} />
            )}
          </div>
        </div>
        <div className="col-2 mb-1 d-flex  justify-content-center header-icon">
          <motion.img
            src={icon ? "images/moon.png" : "images/sun.png"}
            id="icon"
            className="iconic ms-5"
            onClick={iconHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 4 }}
          />
        </div>
      </div>
    </header>
  );
}
