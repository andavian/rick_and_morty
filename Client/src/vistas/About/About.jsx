import React from "react";
import styles from "./about.module.css";
import lk from "../../img/linkedin.png";
import gh from "../../img/code.png";

const About = () => {
  return (
    <section className={styles.container}>
      <header className={styles.head}>
        <h1 className={styles.title}>Anibal Elbaum</h1>
      </header>
      <main className={styles.about}>
        <h2 className={styles.subtitle}>Acerca de mí</h2>
        <p className={styles.text}>
          Soy ingeniero industrial con una sólida experiencia en gestión de
          proyectos y una pasión por la programación. Mi enfoque principal es
          utilizar mis habilidades técnicas y mi experiencia en gestión para
          desarrollar soluciones eficientes y escalables. He tenido la
          oportunidad de aplicar mis conocimientos como profesor, impartiendo
          seminarios, cursos, talleres e incluso materias de nivel medio. <br />
          <br />A lo largo de mi trayectoria profesional, he trabajado en
          entornos dinámicos y multidisciplinarios, lo que me ha permitido
          adquirir habilidades interpersonales sólidas y la capacidad de
          trabajar en colaboración con equipos diversos. Mi experiencia como
          profesor me ha brindado la capacidad de transmitir mis conocimientos
          de manera clara y efectiva, adaptándome a las necesidades y niveles de
          los estudiantes. Soy apasionado por compartir mis conocimientos y
          ayudar a otros a desarrollar sus habilidades. <br />
          <br />
          Disfruto de la oportunidad de inspirar a futuros profesionales y
          fomentar su crecimiento académico. Mi objetivo es seguir aprendiendo y
          creciendo en el campo de la ingeniería industrial y la programación,
          buscando constantemente nuevas formas de mejorar los procesos y
          alcanzar resultados excepcionales. <br />
          <br />
          Si estás buscando a alguien con experiencia en gestión de proyectos,
          habilidades técnicas destacadas y una pasión por la enseñanza, estoy
          comprometido a aportar mi expertise para impulsar el éxito de los
          equipos y contribuir al crecimiento de la organización.
          <br />
          <br /> ¡No dudes en contactarme si deseas saber más sobre mi
          experiencia o si tienes alguna pregunta!
        </p>
      </main>
      <div className={styles.skills}>
        <h3 className={styles.subtitle}>Habilidades clave</h3>
        <p className={styles.text}>Gestión de proyectos</p>
        <p className={styles.text}>Desarrollo full stack</p>
        <p className={styles.text}>Resolución de problemas</p>
        <p className={styles.text}>Comunicación efectiva</p>
        <p className={styles.text}>Docencia</p>
        <p className={styles.text}>Orientación a resultados</p>
        <p className={styles.text}>Adaptabilidad</p>
        <p className={styles.text}>Pensamiento analítico</p>
      </div>
      <div className={styles.experience}>
        <h3 className={styles.subtitle}>Experiencia</h3>
        <p className={styles.text}>
          Desarrollador Full Stack | Freelancer
          <br />
          <em>2022 - Presente</em>
        </p>
        <p className={styles.text}>
          Project Manager | Empresa ANTUIL SAS
          <br />
          <em>2019 - Presente</em>
        </p>
      </div>
      <footer className={styles.foot}>
        <a
          href="https://www.linkedin.com/in/inganibalelbaum"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.icon} src={lk} alt="linkedin" />
        </a>
        <a href="https://github.com/andavian" target="_blank" rel="noreferrer">
          <img className={styles.icon} src={gh} alt="github" />
        </a>
      </footer>
    </section>
  );
};

export default About;
