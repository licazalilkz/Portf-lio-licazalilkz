import styles from "./styles.module.scss";
import githubIMG from "../assets/github.png";
import toPageIMG from "../assets/share.png";

export const Projects = () => {
  const openLinkedin = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://linkedin.com/in/matheus-l-novais-667399231/",
      "_blank"
    );
  };

  const openLinkBurgerGit = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-licazalilkz",
      "_blank"
    );
  };

  const openLinkBurgerVersel = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://react-entrega-s3-template-hamburgueria-licazalilkz.vercel.app",
      "_blank"
    );
  };

  const openLinkApi = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-licazalilkz",
      "_blank"
    );
  };

  const openLinkBandKampGit = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://github.com/licazalilkz/m5-bandkamp-generic-view-licazalilkz",
      "_blank"
    );
  };

  const openLinkBandKampApi = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://m5-bandkamp-generic-view-licazalilkz.onrender.com/api/docs/",
      "_blank"
    );
  };
  return (
    <>
      <div className={styles.containerProjects}>
        <div className="container">
          <div className={styles.contentProjects}>
            <div className={styles.divContentIdea}>
              <div>
                <h1 className="Heading-4-600"> Vamos trocar uma ideia ?</h1>
                <p className="body-1-400">
                  No linkedIn sempre estou compartilhando meus processos diários
                  para desenvolver esses projetos e estou disposto a trocar
                  algumas ideias por lá
                </p>
              </div>
              <button
                className={styles.buttonStyle}
                onClick={(event) => openLinkedin(event)}
              >
                <span className="body-1-600"> Acessar perfil no LinkedIn</span>
              </button>
            </div>
            <div className={styles.divProjectCard}>
              <div>
                <p className="body-1-600">Projetos</p>
                <p className="Heading-2-600">
                  Originalidade e dedicação em cada detalhe
                </p>
              </div>
              {/*  */}
              <div className={styles.card}>
                <h1 className="Heading-3-500">BurgerKenzie</h1>
                <p className="body-2-500">
                  {" "}
                  Linguagens: <span className={styles.spanBlue}>HTML</span>{" "}
                  <span className={styles.spanBlue}>scss</span>{" "}
                  <span className={styles.spanBlue}>JavaScript</span>
                </p>
                <p className="body-2-500">
                  Acessando uma lista de consulta em uma API, foi simulado um
                  carrinho de compras em react, alem de um pouco de estilização.
                </p>
                <div className={styles.divCardButtons}>
                  <button
                    className={styles.cardButton}
                    onClick={(event) => openLinkBurgerGit(event)}
                  >
                    <img src={githubIMG} alt="GitHub" />
                    <p>GitHub</p>
                  </button>{" "}
                  <button
                    className={styles.cardButton}
                    onClick={(event) => openLinkBurgerVersel(event)}
                  >
                    <img src={toPageIMG} alt="toShare" />
                    <p>Aplicação</p>
                  </button>
                </div>
              </div>{" "}
              {/*  */}
              <div className={styles.card}>
                <h1 className="Heading-3-500">BandKamp Generic View</h1>
                <p className="body-2-500">
                  {" "}
                  Tecnologias: <span className={styles.spanBlue}>
                    Django
                  </span>{" "}
                  <span className={styles.spanBlue}>APIView</span>{" "}
                  <span className={styles.spanBlue}>PostgreSQL </span>
                </p>
                <p className="body-2-500">
                  Um projeto feito em phyton, no qual os usuários poderiam se
                  cadastrar, cadastrar álbuns e músicas. Esse projeto foi
                  desenvolvido com Django, utilizando APIView, Serializer e
                  PostgreSQL
                </p>
                <div className={styles.divCardButtons}>
                  <button
                    className={styles.cardButton}
                    onClick={(event) => openLinkBandKampGit(event)}
                  >
                    <img src={githubIMG} alt="GitHub" />
                    <p>GitHub</p>
                  </button>{" "}
                  <button
                    className={styles.cardButton}
                    onClick={(event) => openLinkBandKampApi(event)}
                  >
                    <img src={toPageIMG} alt="toShare" />
                    <p>Aplicação</p>
                  </button>
                </div>
              </div>{" "}
              {/*  */}
              <div className={styles.card}>
                <h1 className="Heading-3-500">
                  User e Courses + Permissão de Administrador
                </h1>
                <p className="body-2-500">
                  {" "}
                  Tecnologias usadas:{" "}
                  <span className={styles.spanBlue}>TypeScript</span>{" "}
                  <span className={styles.spanBlue}>Express</span>{" "}
                  <span className={styles.spanBlue}>Postgres </span>
                </p>
                <p className="body-2-500">
                  Foi um trabalho onde foi solicitado MVP (Minimum Viable
                  Product) de uma API que faz o controle de usuários e cursos em
                  que esses usuários serão matriculados. Aonde tem controle de
                  acessos, onde alguns recursos podem ser acessados apenas por
                  usuários que fizeram login na aplicação, e outros recursos
                  apenas usuários que fizeram login e tem permissões de
                  administrador podem acessar.
                </p>
                <div className={styles.divCardButtons}>
                  <button
                    className={styles.cardButton}
                    onClick={(event) => openLinkApi(event)}
                  >
                    <img src={githubIMG} alt="GitHub" />
                    <p>GitHub</p>
                  </button>{" "}
                </div>
              </div>{" "}
              {/*  */}
            </div>
          </div>

          {/* /**  */}
        </div>
      </div>
    </>
  );
};
