import styles from "./styles.module.scss";
import image from "../assets/matheus.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export const HeaderComponent = () => {
  const openLinkedin = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(
      "https://linkedin.com/in/matheus-l-novais-667399231/",
      "_blank"
    );
  };
  const openGithub = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open("https://github.com/licazalilkz", "_blank");
  };
  return (
    <>
      <div className={styles.containerHeader}>
        <div className="container">
          <div className={styles.contentHeader}>
            <div>
              <img
                className={styles.imgPerfil}
                src={image}
                alt="Perfil Image"
              />
              <p className="Heading-4-600">Matheus Licazali</p>
            </div>

            <div>
              <button className={styles.buttonStyle}>
                <span className="body-1-600">Falar no Whatsapp</span>
              </button>
              <button
                className={styles.buttonStyleImg}
                onClick={(event) => openGithub(event)}
              >
                <img src={github} alt="github" />
              </button>
              <button
                className={styles.buttonStyleImg}
                onClick={(event) => openLinkedin(event)}
              >
                <img src={linkedin} alt="linkedin" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
