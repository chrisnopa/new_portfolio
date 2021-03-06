import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './globals.scss'
import './layout.scss'
import Header from '../header/header'
import Footer from '../footer'
import MobileMenu from '../menu-mobile'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio de Christophe Panon.' },
            { name: 'keywords', content: 'ux, ui, user experience, product development' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            { name: 'google-site-verification', content: 'FPl6dCc6PSh-noFfZ4KF7WOjRUWb5PPreRiew-ZaEZ8'},
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
        </Helmet>
        <MobileMenu />
        <Header />
        <div
          style={{
            margin: '0 auto',
            padding: '96px 0 0 0',
            minHeight: '80vh',
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
