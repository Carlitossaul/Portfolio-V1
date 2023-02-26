import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import img from "../../assets/profile-pic.png";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { RiHome4Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.divLogo}>
        <NavLink to="/">
          <img className={style.logo} src={img} alt={"logo"} />
        </NavLink>
      </div>
      <div className={style.links}>
        <NavLink className={style.NavLink} to="/">
          <RiHome4Fill className={style.icono1} /> Inicio
        </NavLink>
        <NavLink className={style.NavLink} to="/about">
          <TiUser className={style.icono2} /> Sobre mi
        </NavLink>
        <NavLink className={style.NavLink} to="/portfolio">
          <GoBriefcase className={style.iconos} /> Portafolio
        </NavLink>
        <NavLink className={style.NavLink} to="/contact">
          <FaEnvelope className={style.iconos} /> Contacto
        </NavLink>
        <NavLink to={"./pdf"} className={style.NavLink}>
          <div className={style.divButton}>
            <button className={style.button}>
              <BsFillPersonLinesFill className={style.iconos} />
              Currículum
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
