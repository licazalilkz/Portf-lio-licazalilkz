import styles from "./styles.module.scss";
import imageHTML from "../assets/html.svg";
import imageCSS from "../assets/css.svg";
import imageJS from "../assets/js.svg";
import imageNODE from "../assets/node.svg";
import styled from "../assets/styled.svg";
import imageREACT from "../assets/react.svg";

export const Skills = () => {
  return (
    <>
      <div className={styles.containerSkills}>
        <div className="container">
          <div>
            <div className={styles.containerTools}>
              <p className="Heading-3-500">Ferramentas que domino</p>
              <div className={styles.tools}>
                <div>
                  <img src={imageHTML} alt="html" />
                </div>{" "}
                <div>
                  <img src={imageCSS} alt="css" />
                </div>{" "}
                <div>
                  <img src={imageJS} alt="javascript" />
                </div>{" "}
                <div>
                  <img src={imageNODE} alt="node" />
                </div>{" "}
                <div>
                  <img src={styled} alt="styled" />
                </div>{" "}
                <div>
                  <img src={imageREACT} alt="react" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
