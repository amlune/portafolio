import Footer from "@/components/footer";
import Header from "../components/header";
import HomeC from "@/components/home";

import styles from '#/page.module.css'
import Experience from "@/components/experience";
import Ability from "@/components/ability";
import Projects from "@/components/projects";
import AboutMe from "@/components/about_me";
import ContactMe from "@/components/contact_me";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <HomeC />
        <Experience />
        <Ability />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
