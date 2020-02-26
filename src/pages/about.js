import React from 'react'

import Layout from '../components/layout/layout'

import SecImg1 from '../images/about/sticky.jpg'
import SecImg2 from '../images/about/uxui.jpg'

const About = () => (
  <Layout>
    <section className="section-double">
      <div className="section-content">
        <h3>A propos</h3>
        <h2>Résolution & méthode</h2>
        <a
          class="btn"
          href="/cv-français.pdf"
          download="cv-français.pdf"
          target="_blank"
        >
          <span>
            <span>
              <span>Consulter mon CV</span>
            </span>
          </span>
        </a>

        <p>
          J’apprécie l'idée de prendre quelque chose de complexe et de le
          décomposer en parties plus digestes, et surtout plus intelligibles.
          Comprendre les variables en jeu et travailler sur la solution. J'ai eu
          une brève vie en tant que responsable de production dans l’audiovisuel
          et j'ai découvert assez rapidement que ce n'était pas le genre de
          problèmes qui m'intéressaient. Par la suite, je me suis lancé dans la
          gestion de projets digitaux pour différentes entités. Bien qu'il soit
          plus proche de ce que je cherchais, il manquait encore quelque chose.
        </p>
        <p>
          Le tournant est venu lorsque j'ai découvert l'UX. Je savais que
          c'était le genre de problèmes que je voulais résoudre. En prenant les
          compétences créatives que j'avais développées et en les mettant dans
          le processus structuré de conception{' '}
          <strong>tournée vers et avec</strong> l'utilisateur, j'ai pu
          réconcilier les deux côtés de mon cerveau !
        </p>
      </div>
      <div className="section-img">
        <img src={SecImg1} alt="UX/UI" />
      </div>
    </section>
    <section className="section-double section-reverse">
      <div className="section-content">
        <h3>Vision du design</h3>
        <h2>Comprendre & itérer</h2>
        <p>
          I believe the more time you spend examining the problem, the better
          chance you have of solving it. In design, asking ‘what do you need it
          to do’ is not enough. You need to understand what, when, how and most
          importantly why. I believe design is measured on how well it serves
          its purpose. You have to walk a mile in the shoes of the users before
          you can truly understand what they really need.
        </p>
      </div>
      <div className="section-img">
        <img src={SecImg2} alt="UX/UI" />
      </div>
    </section>
  </Layout>
)

export default About
