import { NavLink } from "react-router-dom";
import style from "./Mail.module.css";

const Mail = () => {
  return (
    <div className={style.container}>
      <NavLink className={style.NavLink} to={"mailto:carlitossaul.h@gmail.com"}>
        <div class={style.verticalText}>carlitossaul.h@gmail.com</div>
      </NavLink>
      <div className={style.verticalLine}></div>
    </div>
  );
};
export default Mail;
