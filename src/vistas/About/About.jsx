import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Acerca de mí</h2>
        <p>
          Soy un ingeniero industrial con una sólida experiencia en gestión de
          proyectos y una pasión por la programación. Mi enfoque principal es
          utilizar mis habilidades técnicas y mi experiencia en gestión para
          desarrollar soluciones eficientes y escalables. Me he desarrollado en
          entornos dinámicos y multidisciplinarios, lo que me ha permitido
          adquirir habilidades interpersonales sólidas y la capacidad de
          trabajar en colaboración con equipos diversos.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3>Habilidades clave</h3>
            <ul>
              <li>Gestión de proyectos</li>
              <li>Desarrollo full stack</li>
              <li>Resolución de problemas</li>
              <li>Comunicación efectiva</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Experiencia</h3>
            <p>
              Ingeniero de Proyectos | Empresa XYZ
              <br />
              <em>2016 - Presente</em>
            </p>
            <p>
              Desarrollador Full Stack | Empresa ABC
              <br />
              <em>2014 - 2016</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
