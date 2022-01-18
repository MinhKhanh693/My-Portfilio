import React from "react";
import Typed from "react-typed";
import { toastSuccess } from "../toastMassage/toastMassage";
import "./../Home/Home.css";
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hi, my name is</div>
          <div className="text-2">Minh Khanh</div>
          <div className="text-3">
            And I'm a{" "}
            <Typed
              strings=
              {[
                "Developer",
                "React Dev",
                "React Native Dev",
                "Node js Dev",
              ]}
              typeSpeed={100} 
              backSpeed={100}
              loop  
              />        
          </div>
          <a href="#home" onClick={()=>{toastSuccess('Hello, nice to meet you !')}}>Hire me</a>
        </div>
      </div>
    </section>
  );
}
