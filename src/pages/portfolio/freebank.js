import React from 'react'

import Layout from '../../components/layout/layout'
// import SecImg2 from '../../images/headbutt/headbutt02.jpg'
// import SecImg3 from '../../images/headbutt/headbutt03.jpg'
// import SecImg4 from '../../images/headbutt/headbutt04.jpg'
import SecImg5 from '../../images/headbutt/frame1.jpg'
import SecImg6 from '../../images/headbutt/historique.jpg'
import SecImg7 from '../../images/headbutt/cover.jpg'
import SecImg8 from '../../images/headbutt/persona1.jpg'
import SecImg9 from '../../images/headbutt/persona2.jpg'
import SecImg10 from '../../images/headbutt/empathy1.jpg'
import SecImg11 from '../../images/headbutt/empathy2.jpg'
import SecImg12 from '../../images/headbutt/Storyboard.jpg'
import SecImg13 from '../../images/headbutt/experience-map.jpg'
import SecImg14 from '../../images/headbutt/value-proposition.jpg'
import SecImg15 from '../../images/headbutt/enseignements.jpg'

const Blog3 = () => (
  <Layout>
    <section className="section-single-image">
      <img src={SecImg5} alt="Headbutt screens" />
    </section>
    <section className="section-double section-intro">
      <div className="section-content">
        <h2>Projet</h2>
        <p>
          FreeBank est un projet UX, réalisé dans le cadre du mentoring UX du
          Laptop, et qui a permis de mettre en pratique l’ensemble des grandes
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
          Lors de la réunion de lancement, le brief (fictif) suivant nous a été
          présenté : FreeBank, nouvel acteur du secteur bancaire en France,
          souhaite développer une nouvelle solution : un nouveau compte partagé,
          dit « Compte partagé 2.0 ». En bref : un compte partagé plus simple et
          plus en adéquation avec les nouveaux usages et les transformations
          d’une société où la cellule familiale est plus éclatée.
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
          <img src={SecImg9} alt="Persona #2" />
          <figcaption>Persona #2</figcaption>
        </figure>
      </div>
      <div className="section-img">
        <figure>
          <img src={SecImg8} alt="Persona #1" />
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
          Après avoir projeté nos a-priori dans des proto-personas, nous avons
          confronté ces intuitions aux utilisateurs cibles du projet, à travers
          une série d’entretiens qualitatifs d'environ 1h pour chaque
          interviewé. Ces entretiens ont été réalisés à l'aide d'un
          questionnaire et d'un protocole établis à l'avance.
        </p>
        <br />
        <p>
          Après restitution des entretiens et analyse, condensation des grandes
          tendances en personas. Deux personas représentatifs ont été conçus.
          Ces deux profils sont complémentaires pour résoudre la problématique
          du projet et ont donné les enseignements suivants :
          <ul>
            <li>
              Le compte joint vu par les personnes en couple est avant tout
              perçu comme une solution de facilité pour le quotidien mais
              devrait également les accompagner dans les projets à deux.
            </li>
            <li>
              Les utilisateurs souhaitent une meilleure lisibilité des
              dépenses, et un système clair et engageant.
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
    <section className="section-single-image">
      <figure>
        <img src={SecImg15} alt="Enseignement des entretiens" />
        <figcaption>Enseignement des entretiens</figcaption>
      </figure>
    </section>
    <section className="section-single-image">
      <figure>
        <img src={SecImg13} alt="Enseignement des entretiens" />
        <figcaption>
          Experience Map réalisée suite aux entretiens utilisateurs
        </figcaption>
      </figure>
    </section>
    <section>
      <div className="section-single-image">
        <figure>
          <img src={SecImg14} alt="Proposition de valeur" />
          <figcaption>Proposition de valeur</figcaption>
        </figure>
      </div>
    </section>
    <section className="section-double section-reverse">
      <div className="section-img">
        <figure>
          <img src={SecImg11} alt="Empathy map #2" />
        </figure>
      </div>
      <div className="section-img">
        <figure>
          <img src={SecImg10} alt="Empathy map #1" />
        </figure>
      </div>
    </section>
    <section className="section-single-image">
      <figure>
        <img src={SecImg13} alt="Experience map" />
        <figcaption>
          Experience Map réalisée suite aux entretiens utilisateurs
        </figcaption>
      </figure>
    </section>
    <section className="section-double section-reverse">
      <div className="section-content">
        <h2>Vision & Design</h2>
        <p>
          Pour matérialiser notre proposition de valeur, un rapide sketching
          puis un prototypage d’une feature répondant aux attentes des
          utilisateurs incarnés par les personas a été effectué. Le principe :
          un sous-compte appelé « tirelire ». Cette feature a été rapidement
          prototypée et testée auprès de personnes afin de recueillir leur
          feedback et confirmer/infirmer la matérialisation de la proposition de
          valeur initiale.
        </p>
      </div>
      <div className="section-img">
        <figure>
          <img src={SecImg12} alt="Première ébauche" />
          <figcaption>Première ébauche</figcaption>
        </figure>
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
          a été présenté devant un jury d'UX professionnels. La vidéo de cette
          présentation est disponible{' '}
          <a
            id="fancy-word"
            target="_blank"
            href="https://youtu.be/YhhDzUfGZzg"
          >
            ici
          </a>
          .
        </p>
      </div>
    </section>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: 'FreeBank',
  written: '09/12/2019',
  layoutType: 'portfolio',
  category: '#ui #ux #projet',
  path: 'p-bishop.jpg',
}
