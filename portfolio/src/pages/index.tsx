import { Footer } from "./footer";
import { HeaderComponent } from "./header";
import { IntroComponent } from "./intro";
import { Projects } from "./myprojects";
import { Skills } from "./skills";
import styles from "./styles.module.scss";

export function HomePage() {
  return (
    <>
      <div className={styles.contentDashboard}>
        <HeaderComponent />
        <IntroComponent />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
