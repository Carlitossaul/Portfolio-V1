import React from "react";
import style from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const handleWhatsapp = () => {
  window.open("https://api.whatsapp.com/send?phone=3704988894");
};

const Contact = () => {
  return (
    <div className={style.Container}>
      <h1 className={style.h1}>Contact</h1>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            Actualmente me encuentro en la busqueda de mi primer empleo en el
            sector IT.
          </p>
          <p className={style.p}>Ponte en contacto conmigo!</p>
          <p className={style.p}></p>
        </div>
        <div className={style.divButton}>
          <NavLink
            to={"mailto:carlitossaul.h@gmail.com"}
            className={style.NavLink}
          >
            <button className={style.button}>
              <BsFillEnvelopeFill /> Enviar Correo
            </button>
          </NavLink>
          <NavLink
            className={style.NavLink}
            href="javascript:void(0);"
            onClick={handleWhatsapp}
          >
            <button className={style.buttonWhats}>
              <ImWhatsapp className={style.icon} />
              WhatsApp
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
