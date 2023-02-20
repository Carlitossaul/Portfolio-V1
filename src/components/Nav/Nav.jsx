import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import img from "../../assets/profile-pic (3).png";
import Redes from "../Redes/Redes";
import Mail from "../Mail/Mail";

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
          <span className={style.span}>01. </span> Home
        </NavLink>
        <NavLink className={style.NavLink} to="/about">
          <span className={style.span}>02. </span> About
        </NavLink>
        <NavLink className={style.NavLink} to="/portfolio">
          <span className={style.span}>03. </span> Portfolio
        </NavLink>
        <NavLink className={style.NavLink} to="/contact">
          <span className={style.span}>04. </span> Contact
        </NavLink>
        <div className={style.divButton}>
          <button className={style.button}>CV-Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
