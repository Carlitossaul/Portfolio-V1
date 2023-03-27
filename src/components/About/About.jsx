import style from "./About.module.css";
import img from "../../assets/20230218_124337_(1).jpg";

const About = () => {
  return (
    <div className={style.Container}>
      <div className={style.title}>
        <h1 className={style.h1}>About </h1>
        <br />
      </div>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            Hola! Mi nombre es Carlos Lovey y me gusta crear cosas que viven en
            internet. Me encanta desarrollar, me apasiona.. Disfruto crear
            proyectos y verlos trabajando en el navegador.
          </p>
          <p className={style.p}>
            Mi interes por el desarrollo web se gesto en mi adolecencia pero
            pude dedicarme a mi formacion recien alla por junio de 2022 en un
            bootcamp. En simultaneo he hecho cursos para complementar la ruta de
            aprendizaje, actualmente tengo expericiencia trabajando con las
            siguientes tecnologias:
          </p>
        </div>
        <div className={style.divImg}>
          <img className={style.img} src={img} alt="Carlos Lovey" />
        </div>
      </div>
      <div className={style.tecnologias}>
        <table className={style.table}>
          <tr>
            <td>
              <li>Html</li>
            </td>
            <td>
              <li>React</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>CSS</li>
            </td>
            <td>
              <li>Redux</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Bootstrap</li>
            </td>
            <td>
              <li>Git</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Javascript (ES6+)</li>
            </td>
            <td>
              <li>Github</li>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
