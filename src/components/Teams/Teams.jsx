import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TeamCard from "./TeamCard";
import "./Teams.css";

export default function Teams() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    // <!-- teams section start -->
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My teams</h2>
        {/* <div className="carousel owl-carousel"> */}
        <Slider {...settings} className="carousel owl-carousel">
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TeamCard
            name="Unknown"
            contact="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            img="https://images.unsplash.com/photo-1580065632882-3d6d4ca954ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
}
