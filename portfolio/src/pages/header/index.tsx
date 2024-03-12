import styles from "./styles.module.scss";

export const HeaderComponent = () => {
  return (
    <>
      <div className={styles.containerHeader}>
        <div className="container">
          <div className={styles.contentHeader}>
            <div>
              <img src="" alt="Perfil Image" />
              <p>Matheus Licazali</p>
            </div>

            <div>
              <button> Whatsapp</button>
              <button> Github </button>
              <button> Linkedin </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
