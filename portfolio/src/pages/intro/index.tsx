import styles from "./styles.module.scss";

export const IntroComponent = () => {
  const openProjects = () => {
    window.open(
      "https://github.com/orgs/Kenzie-Academy-Brasil-Developers/repositories?type=public&q=licazalilkz",
      "_blank"
    );
  };
  return (
    <div className={styles.containerIntro}>
      <div className="container">
        <div className={styles.contentIntro}>
          <div className={styles.divTextIntro}>
            <h1 className="Heading-1-700">
              Criando experiências por meio da tecnologia
            </h1>
            <p className="body-1-400">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </p>
          </div>

          <div className={styles.divButtonIntro}>
            <button
              className={styles.buttonStyle}
              onClick={() => openProjects()}
            >
              <span className="Heading-4-600">projetos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
