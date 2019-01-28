import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import Contact from '../components/contact/contact'

class ContactPage extends Component {
  render() {    
    return (
      <Layout>
          <Contact />
      </Layout>
    );
  }
}

export default ContactPage;