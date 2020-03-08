import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import compStyles from './css/home.module.css'

import IntroBG from '../images/DSC_0561.jpg'
import ContactIcon from '../images/icons/mail(1).png'
import WorkIcon from '../images/icons/pencil(1).png'
import AboutIcon from '../images/icons/sunglasses(1).png'
// import Test from '../components/pdf.js'


class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    return (
      <Layout>
        <section className={compStyles.intro}>
          <div className="section-content">
            <h1>Christophe Panon</h1>
            <h2>User Experience / Product Development</h2>
            <p>
              De formation éditoriale et gestion de projets numériques, j'ai eu
              l'occasion de travailler pour différents types de clients : ONG,
              institutions, entreprises... Tourné vers la recherche de
              solutions, je suis désormais responsable de projets digitaux avec
              un bagage technique et souhaitant oeuvrer comme Product Owner.
              <br/>
              
              <span id="fancy-word"> A l'écoute d'opportunités !</span>
            </p>
            
            {/* <div className="btn">
              <Link to="/cv-français.pdf">Consulter mon CV.</Link>
            </div>
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
            </a> */}
          </div>
          <div className="section-img">
            <img
              src={IntroBG}
              alt="Christophe Panon - User Experience - Gestion de projet/produit"
            />
          </div>
        </section>

        <div className={compStyles.todo}>
          <Link to="/portfolio">
            <div className={compStyles.block}>
              <img src={WorkIcon} alt="Portfolio Icon" />
              <h3>Portfolio</h3>
              Voir quelques uns de mes projets.
            </div>
          </Link>
          <Link to="/about">
            <div className={compStyles.block}>
              <img src={AboutIcon} alt="Blog Icon" />
              <h3>A propos</h3>
              Bio, CV.
            </div>
          </Link>
          <Link to="/contact">
            <div className={compStyles.block}>
              <img src={ContactIcon} alt="Contact Icon" />
              <h3>Contact</h3>
              Envie de me contacter ? Envoyez un email.
            </div>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
