import style from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={style.Container}>
      <div className={style.title}>
        <h1 className={style.h1}>
          {" "}
          <span className={style.span}>03.</span> Portfolio{" "}
        </h1>
        <br />
      </div>
    </div>
  );
};

export default Portfolio;
