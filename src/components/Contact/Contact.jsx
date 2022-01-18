import emailjs from "emailjs-com";
import React from "react";
import { toastSuccess } from "../toastMassage/toastMassage";
import "./Contact.css";
import ContactCard from "./ContactCard";
export default function Contact() {
  const [name, setName] = React.useState("");
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_up46dti",
        "template_f4rh1nl",
        e.target,
        "user_IUzsKHVchA9E7gRvLcVj4"
      )
      .then((e) => {
        toastSuccess(
          `Hi ${name}, Thank you for your message, I will reply as soon as possible`
        );
      });
  };
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content" style={{ alignItems: "flex-start" }}>
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>You can contact me, through these methods, thanks.</p>
            <div className="icons">
              <ContactCard
                logo={<i className="fas fa-user"></i>}
                title="Name"
                contact="Doan Minh Khanh"
              />
              <ContactCard
                logo={<i className="fas fa-map-marker-alt"></i>}
                title="Address"
                contact="Viet Nam"
              />
              <ContactCard
                logo={<i className="fas fa-envelope"></i>}
                title="Email"
                contact="khanhdoan693@gmail.com"
              />
              <ContactCard
                logo={<i className="fab fa-github"></i>}
                title="Ghihub"
                contact={
                  <>
                    <span
                      onClick={(e) =>
                        window.open("https://github.com/MinhKhanh693")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      github/MinhKhanh693
                    </span>
                  </>
                }
              />
              <ContactCard
                logo={<i className="fab fa-facebook"></i>}
                title="FaceBook"
                contact={
                  <>
                    <span
                      onClick={(e) =>
                        window.open("https://www.facebook.com/MinhKhanhh09/")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      facebook.com/MinhKhanhh09
                    </span>
                  </>
                }
              />
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#" onSubmit={sendMail}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
