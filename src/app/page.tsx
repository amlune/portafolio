import Footer from "@/components/footer";
import Header from "../components/header";
import HomeC from "@/components/home";
import Experience from "@/components/experience";
import Ability from "@/components/ability";
import Projects from "@/components/projects";
import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contactMe";

import styles from '@/app/page.module.css';

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
