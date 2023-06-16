import style from "./Portfolio.module.css";
import appRecipes from "../../assets/app-recipes.png";
import appRyM from "../../assets/Screenshot_7.png";
import appImages from "../../assets/Screenshot_8.png";
import appWorkify from "../../assets/workify.png";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Portfolio}>
      <div className={style.container}>
        <div className={style.titlePag}>
          <h1 className={style.h1}> Portfolio </h1>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Workify Services</h1>
          <div className={style.contentModelTwo}>
            <Link target="_blank" to={"https://areyouhungry.vercel.app/"}>
              <img
                className={style.image}
                src={appWorkify}
                alt="app-Workify-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>Website to publish services</h3>
              <p className={style.parrafo}>
                This is a group project that we develop among eight students to
                pass the final stage of the Henry bootcamp. On site to publish
                services or to contract them, cart, payment gateway, admin
                dashboard among other things are applied.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://workify-alpha.vercel.app"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={
                    "https://github.com/JensyFigueroa/domesticServices_Frontend"
                  }
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - client</p>
                </Link>
                <Link
                  className={style.link}
                  target="_blank"
                  to={
                    "https://github.com/JensyFigueroa/domesticServices_Backend"
                  }
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - api</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Are You Hungry?</h1>
          <div className={style.contentModelOne}>
            <Link target="_blank" to={"https://areyouhungry.vercel.app/"}>
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
                This is an individual integrative project that I developed in
                order to pass the first instance of the two final projects of
                the bootcamp Henry. A recipe app to search by name or by diet.
                Some of its functions are recipe creation or combined filters.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://areyouhungry.vercel.app"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://github.com/Carlitossaul/PI-Food-Front"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - client</p>
                </Link>
                <Link
                  className={style.link}
                  target="_blank"
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
          <h1 className={style.titleWeb}>Rick And Morty Multiverse</h1>
          <div className={style.contentModelTwo}>
            <Link target="_blank" to={"https://rym-multiverse.vercel.app/"}>
              <img className={style.image} src={appRyM} alt="app-RyM" />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>Rick & Morty website</h3>
              <p className={style.parrafo}>
                This project is special because I learned to program with it. It
                is an app that consumes data from the Rick & Morty api. We
                worked Front-End, Server and Database. A particularity that
                fills me with pride is that in the bootcamp each student had to
                present this project that we were doing for a competition
                between 60+ students where the first 3 winners would have some
                benefits from Henry, and in this competition I came in second
                place.
                <Link
                  className={style.link}
                  to={
                    "https://www.linkedin.com/feed/update/urn:li:activity:7047663550776918016/"
                  }
                >
                  Here is the publication of my instructor on Linkedin.
                </Link>
              </p>
              <div className={style.links}>
                <Link
                  className={style.link}
                  target="_blank"
                  to={"https://rym-multiverse.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  className={style.link}
                  target="_blank"
                  to={"https://github.com/Carlitossaul/App-Ricky-and-Morty"}
                >
                  <GoMarkGithub className={style.icon} />

                  <p>View the source code on GitHub</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Search Images</h1>
          <div className={style.contentModelOne}>
            <Link target="_blank" to={"https://search-images-gilt.vercel.app/"}>
              <img
                className={style.image}
                src={appImages}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>Website to find images</h3>
              <p className={style.parrafo}>
                This website is a project that I created to practice what I was
                learning in my front-end classes when I was studying module two
                at Henry. I wanted to create an app using React and Redux, but
                the most important thing and what I cared about in those days
                was learning how to consume data from APIs. This is how this
                project started, and with time, it became important to me
                because I use it to find images for my new projects.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://search-images-gilt.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://github.com/Carlitossaul/search-images"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub</p>
                </Link>
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
