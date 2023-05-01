import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Container}>
      <h1 className={style.h1}>Contact</h1>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            I am currently looking for my first job in the IT sector.
          </p>
          <p className={style.p}>Contact me!</p>
          <p className={style.p}></p>
        </div>
        <div className={style.divButton}>
          <NavLink
            to={"mailto:carlitossaul.h@gmail.com"}
            className={style.NavLink}
          >
            <button className={style.button}>
              <BsFillEnvelopeFill /> SEND MAIL
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
