import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <Slider {...settings} className="serv-content">
          <ServiceCard
            logo={<i className="fab fa-react" style={{ color: "#61dafb" }}></i>}
            title={
              <>
                React<strong style={{ color: "#61dafb" }}> js</strong>
              </>
            }
            description="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. By FaceBook (Meta)."
            link="https://reactjs.org/"
          />
          <ServiceCard
            logo={<i className="fab fa-react" style={{ color: "#61dafb" }}></i>}
            title={
              <>
                React<strong style={{ color: "#61dafb" }}> Navite</strong>
              </>
            }
            description="React Native is an open-source framework created by Facebook. It is used to develop Android, iOS mobile applications."
            link="https://reactnative.dev/"
          />
          <ServiceCard
            logo={<i className="fab fa-node" style={{ color: "#71A962" }}></i>}
            title={
              <>
                N<strong style={{ color: "#71A962" }}>O</strong>de js
              </>
            }
            description="Node.js is system software designed to write scalable internet applications, especially web servers. The program is written in JavaScript."
            link="https://nodejs.org/en/about/"
          />
          <ServiceCard
            logo={
              <i className="fab fa-envira" style={{ color: "#71A962" }}></i>
            }
            title={
              <>
                Mongo<strong style={{ color: "#71A962" }}>DB</strong>
              </>
            }
            description="MongoDB is a pre-sourced platform program database manual. Classified as a program database NoSQL, MongoDB uses JSON-like."
            link="https://docs.mongodb.com/"
          />
          <ServiceCard
            logo={
              <i className="fab fa-node-js" style={{ color: "yellow" }}></i>
            }
            title={
              <>
                Express <span style={{ color: "yellow" }}> js</span>
              </>
            }
            description="Express.js, or simply Express, is a back-end web application framework for Node.js, released as free and open-source software."
            link="https://expressjs.com/"
          />
        </Slider>
      </div>
    </section>
  );
}
