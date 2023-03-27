import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./Redes.module.css";

const Redes = () => {
  return (
    <div className={style.container}>
      <NavLink
        to={"https://github.com/Carlitossaul"}
        target="_blank"
        className={style.NavLink}
      >
        <GoMarkGithub className={style.iconos} />
      </NavLink>
      <NavLink
        to={"https://www.linkedin.com/in/carloslovey/"}
        className={style.NavLink}
        target="_blank"
      >
        <FaLinkedin className={style.iconos} />
      </NavLink>
      <NavLink
        to={"https://www.instagram.com/carlos.lovey/"}
        className={style.NavLink}
        target="_blank"
      >
        <FaInstagram className={style.iconos} />
      </NavLink>
      <div className={style.verticalLine}></div>
    </div>
  );
};
export default Redes;
