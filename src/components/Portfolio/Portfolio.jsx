import style from "./Portfolio.module.css";
import appRecipes from "../../assets/app-recipes.png";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const Portfolio = () => {
  return (
    <div className={style.Portfolio}>
      <div className={style.container}>
        <div className={style.titlePag}>
          <h1 className={style.h1}> Portfolio </h1>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Are You Hungry?</h1>
          <div className={style.contentModelOne}>
            <Link to={"https://areyouhungry.vercel.app/"}>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>
                Website about recipes and diets
              </h3>
              <p className={style.parrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nesciunt minus officia earum labore nisi. Delectus reprehenderit
                fugit quia necessitatibus sapiente repellat repellendus?
                Corrupti quibusdam explicabo saepe, inventore qui libero.
              </p>
              <div className={style.links}>
                <Link
                  className={style.link}
                  to={"https://areyouhungry.vercel.app"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  className={style.link}
                  to={"https://github.com/Carlitossaul/PI-Food-Front"}
                >
                  <GoMarkGithub className={style.icon} />

                  <p>View the source code on GitHub - client</p>
                </Link>
                <Link
                  className={style.link}
                  to={"https://github.com/Carlitossaul/PI-Food-back-"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - api</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Website from Recipes and Diets</h1>
          <div className={style.contentModelTwo}>
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
          <div className={style.contentModelOne}>
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
