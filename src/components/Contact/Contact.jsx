import React from "react";
import style from "./Contact.module.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className={style.Container}>
      <h1 className={style.h1}>
        <span className={style.span}>04. </span>Contacto
      </h1>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            Actualmente me encuentro en la busqueda de mi primer empleo en el
            sector IT.
          </p>
          <p className={style.p}>Escribeme un correo!</p>
          <p className={style.p}></p>
        </div>
        <NavLink
          to={"mailto:carlitossaul.h@gmail.com"}
          className={style.NavLink}
        >
          <div className={style.divButton}>
            <button className={style.button}>SEND EMAIL</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
