import style from "./Portfolio.module.css";
import appRecipes from "../../assets/app-recipes.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className={style.Portfolio}>
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.h1}> Portfolio </h1>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Website from Recipes and Diets</h1>
          <div className={style.content}>
            <Link>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <p className={style.parrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nesciunt minus officia earum labore nisi. Delectus reprehenderit
                fugit quia necessitatibus sapiente repellat repellendus?
                Corrupti quibusdam explicabo saepe, inventore qui libero.
              </p>
              <div className={style.links}>
                <Link>Hola</Link>
                <Link>Hola</Link>
                <Link>Hola</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Website from Recipes and Diets</h1>
          <div className={style.content}>
            <Link>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <p className={style.parrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nesciunt minus officia earum labore nisi. Delectus reprehenderit
                fugit quia necessitatibus sapiente repellat repellendus?
                Corrupti quibusdam explicabo saepe, inventore qui libero.
              </p>
              <div className={style.links}>
                <Link>Hola</Link>
                <Link>Hola</Link>
                <Link>Hola</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Website from Recipes and Diets</h1>
          <div className={style.content}>
            <Link>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <p className={style.parrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nesciunt minus officia earum labore nisi. Delectus reprehenderit
                fugit quia necessitatibus sapiente repellat repellendus?
                Corrupti quibusdam explicabo saepe, inventore qui libero.
              </p>
              <div className={style.links}>
                <Link>Hola</Link>
                <Link>Hola</Link>
                <Link>Hola</Link>
              </div>
            </div>
          </div>
          <div className={style.space}> </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
