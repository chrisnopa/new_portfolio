import React from 'react'

import Layout from '../components/layout/layout'
import SecImg1 from '../images/about/sticky.jpg'
import SecImg2 from '../images/about/uxui.jpg'
import { useStaticQuery, graphql } from 'gatsby'

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <section className="section-double">
        <div className="section-content">
          <h3>À propos</h3>
          <h2>Résolution & méthode</h2>
          <p>
          J’apprécie l'idée de prendre quelque chose de complexe et de le
            décomposer en parties plus digestes, et surtout plus intelligibles.
            Comprendre les variables en jeu et travailler à la solution. J' ai
            eu une brève vie en tant que responsable de production dans
            l’audiovisuel et j'ai découvert assez que ce n'était pas le genre de
            problèmes qui m'intéressaient. Par la suite, je me suis lancé dans
            la
            <span id="fancy-word"> gestion de projets digitaux</span> pour
            différentes entités.
          </p>
          <p>
            Le tournant est venu lorsque j'ai découvert l'UX et les processus
            structurés de conception
            <span id="fancy-word"> tournés vers l'utilisateur et avec lui</span>.
          </p>
          <ul class='btn'>
                    {data.allFile.edges.map((file, index) => {
                      return (
                        <li key={`pdf-${index}`}>
                          <a href={file.node.publicURL} download>
                            Consulter mon CV
                          </a>
                        </li>
                      )
                    })}
                  </ul>
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
            Je crois qu'accepter de passer du temps à examiner le problème,
            c'est déjà être en train de le résoudre. Essayer de comprendre quoi,
            quand, comment et surtout pourquoi est pour moi le meilleur
            indicateur design, celui de l'utilité.
          </p>
        </div>
        <div className="section-img">
          <img src={SecImg2} alt="UX/UI" />
        </div>
      </section>
    </Layout>
  )
}
export default DownloadsPage
