import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import img from "../../assets/profile-pic.png";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { TiUser } from "react-icons/ti";
import { RiHome4Fill } from "react-icons/ri";

const Nav = () => {
  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.divLogo}>
        <Link to="/">
          <img className={style.logo} src={img} alt={"logo"} />
        </Link>
      </div>
      <div className={style.links}>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/" && style["link-active"]
          }`}
          to="/"
        >
          <RiHome4Fill className={style.icono1} /> Inicio
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/about" && style["link-active"]
          }`}
          to="/about"
        >
          <TiUser className={style.icono2} /> Sobre mi
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/portfolio" && style["link-active"]
          }`}
          to="/portfolio"
        >
          <GoBriefcase className={style.iconos} /> Portafolio
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/contact" && style["link-active"]
          }`}
          to="/contact"
        >
          <FaEnvelope className={style.iconos} /> Contacto
        </Link>
        <Link to={"./pdf"} className={style.link}>
          <div className={style.divButton}>
            <button className={style.button}>
              <BsFillPersonLinesFill className={style.iconos} />
              Currículum
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
