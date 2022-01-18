import React, { Fragment } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Skill from "../components/Skill/Skill";
import Teams from "../components/Teams/Teams";
import { ToastContainer } from "react-toastify";

export default function PageHome() {
  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Home />
      <About />
      <Services />
      <Skill />
      <Teams />
      <Contact />
      <Footer />
    </Fragment>
  );
}
