// import EjectOutlinedIcon from "@mui/icons-material/EjectOutlined";
import React, { Fragment, useEffect, useState } from "react";
import MusicCard from "../MusicCard/MusicCard";
import "./Header.css";

export default function Header() {
  const [sticky, SetTicky] = useState(false);
  const [btnShow, setBtnShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        SetTicky(window.pageYOffset > 20)
      );
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBtnShow(window.pageYOffset > 500)
      );
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBtnShow(window.pageYOffset > 500)
      );
    }
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <MusicCard />
      <div
        className={`scroll-up-btn ${btnShow ? "show" : ""}`}
        onClick={handleToTop}
      >
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#home">
              Portfo<span>lio.</span>
            </a>
          </div>
          <ul className={`menu ${toggle ? "active" : ""}`}>
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#teams" className="menu-btn">
                Teams
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div
            className="menu-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className={`fas fa-bars ${toggle ? "active" : ""}`}></i>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
