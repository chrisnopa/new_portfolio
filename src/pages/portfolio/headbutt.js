import React from 'react'

import Layout from '../../components/layout/layout'
import SecImg2 from '../../images/headbutt/headbutt02.jpg'
import SecImg3 from '../../images/headbutt/headbutt03.jpg'
import SecImg4 from '../../images/headbutt/headbutt04.jpg'
import SecImg5 from '../../images/headbutt/frame1.jpg'
import SecImg6 from '../../images/headbutt/historique.jpg'
import SecImg7 from '../../images/headbutt/cover.jpg'
import SecImg8 from '../../images/headbutt/persona1.jpg'
import SecImg9 from '../../images/headbutt/persona2.jpg'

const Blog3 = () => (
  <Layout>
    <section className="section-single-image">
      <img src={SecImg5} alt="Headbutt screens" />
    </section>
    <section className="section-double section-intro">
      <div className="section-content">
        <h2>Projet</h2>
        <p>
          FreeBank est un projet UX réalisé dans le cadre du mentoring UX du
          Laptop et qui a permis de mettre en pratique l’ensemble des grandes
          pratiques de l’UX Design. Ce projet s'est déroulé sur 9 semaines en
          part time.
        </p>
      </div>
      <div className="section-img">
        <img src={SecImg6} alt="Calendrier du projet" />
      </div>
    </section>

    <section className="section-double section-reverse">
      <div className="section-content">
        <h2>Kickoff</h2>
        <p>
          Lors de la réunion de lancement, le brief (fictif) suivant nous a été présenté : FreeBank, nouvel acteur du secteur bancaire en
          France, souhaite développer une nouvelle solution : un nouveau compte
          partagé, dit « Compte partagé 2.0 ». En bref : un compte partagé plus
          simple et plus en adéquation avec les nouveaux usages et les
          transformations d’une société où la cellule familiale est plus
          éclatée.
        </p>
      </div>
      <div className="section-img">
        <figure>
          <img src={SecImg7} alt="Bishop one button" />
          <figcaption>Un couple</figcaption>
        </figure>
      </div>
    </section>
    <section className="section-double section-reverse">
      <div className="section-img">
        <figure>
          <img src={SecImg9} alt="Bishop one button" />
          <figcaption>Persona #2</figcaption>
        </figure>
      </div>
      <div className="section-img">
        <figure>
          <img src={SecImg8} alt="Bishop one button" />
          <figcaption>Persona #1</figcaption>
        </figure>
      </div>
    </section>
    <section className="section-single">
      <div>
        <h2>Picking up the pieces</h2>
        <p>
          Notre intuition de départ: Le couple en France constitue une cible
          évidente, à l’heure où l’attractivité du compte joint est remise en
          question et où le marché est bousculé par de nouveaux acteurs issus de
          la FinTech. Le compte-joint, malgré les défauts de cette solution
          présente de nombreux avantages et un potentiel encore mal exploité.
          Reformulation de la problématique : Comment pourrions-nous transformer
          notre offre de compte joint des jeunes couples en un véritable
          partenaire du quotidien ?
        </p>
      </div>
    </section>
    <section className="section-single">
      <div>
        <h2>La recherche & cartographie UX</h2>
        <p>
          proto personas + entretiens + personas Projections des a-priori en
          proto-personas et confrontation des intuitions aux utilisateurs cibles
          du projet, à travers une série d’entretiens qualitatifs. Après
          restitution des entretiens et analyse, condensation des grandes
          tendances en personas. Deux personas représentatifs ont été conçus.
          Ces deux profils sont complémentaires pour résoudre la problématique
          du projet et donnent les enseignements suivants :
          <ul>
            <li>
              {' '}
              Le compte joint vu par les personnes en couple est avant tout
              perçu comme une solution de facilité pour le quotidien mais
              devrait également les accompagner dans les projets à deux.
            </li>
            <li>
              Les utilisateurs souhaitent une meilleure lisibilités des
              dépenses, et un système clair et engageant.{' '}
            </li>
            <li>
              Une plus grande diversification des offres et services proposés
              aux utilisateurs de compte joint est nécessaire pour personnaliser
              l’offre.
            </li>
          </ul>
        </p>
      </div>
    </section>
    <section className="section-single">
      <div>
        <h2>Design</h2>
        <p>
          La vision Sketching et rapide prototypage d’une feature répondant aux
          attentes des utilisateurs incarnés par les personas, avec un principe
          de sous-compte appelé « tirelire ». Cette feature a été rapidement
          prototypée et testée auprès de personnes afin de recueillir leur
          feedback et confirmer/infirmer la matérialisation de la proposition de
          valeur initiale.
        </p>
      </div>
    </section>
    <section className="section-single">
      <div>
        <h2>Résultats</h2>
        <p>
          Les tests ont été réalisés en présentiel, suivant un protocole de test
          et sur un échantillon réduit de 6 personnes : La notion de "tirelire"
          se confirme comme étant une réponse aux besoins des utilisateurs
          finaux. En amont de la production des contenus, une réflexion est à
          mener sur la ligne et la tonalité éditoriale de la solution. Le projet
          a été présenté devant un jury d'UX professionnels. La vidéo est
          disponible <a href="">ici</a>
        </p>
      </div>
    </section>
    <section className="section-single-image">
      <img src={SecImg3} alt="Headbutt game types" />
    </section>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: 'FreeBank',
  written: '09/12/2019',
  layoutType: 'portfolio',
  category: '#ui #ux #projet',
  path: 'p-freebank.jpg',
}
