import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className={styles.title}>Acerca de mí</h2>
        <p className={styles.text}>
          Soy ingeniero industrial con una sólida experiencia en gestión de
          proyectos y una pasión por la programación. Mi enfoque principal es
          utilizar mis habilidades técnicas y mi experiencia en gestión para
          desarrollar soluciones eficientes y escalables. Me he desarrollado en
          entornos dinámicos y multidisciplinarios, lo que me ha permitido
          adquirir habilidades interpersonales sólidas y la capacidad de
          trabajar en colaboración con equipos diversos.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3 className={styles.subtitle}>Habilidades clave</h3>
            <ul>
              <li className={styles.text}>Gestión de proyectos</li>
              <li className={styles.text}>Desarrollo full stack</li>
              <li className={styles.text}>Resolución de problemas</li>
              <li className={styles.text}>Comunicación efectiva</li>
            </ul>
          </div>
          <div className="col-md-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;
