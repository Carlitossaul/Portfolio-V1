import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className={style.h1}>Hi, my name is</h1>
        <h2 className={style.h2}>Carlos Lovey.</h2>
        <h3 className={style.h3}>I build websites</h3>
        <p className={style.p}>
          I'm a Developer Web Full Stack{" "}
          {/* graduado de{" "}
          <NavLink
            target="_blank"
            className={style.Navlink}
            to={"https://www.soyhenry.com/"}
          >
            Henry
          </NavLink> */}
        </p>
      </div>
    </div>
  );
};

export default Home;
