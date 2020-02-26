import React, { Component } from 'react'

import Layout from '../components/layout/layout'

class ContactPage extends Component {
  render() {    
    return (
      <Layout>
          <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '48px',
                height: '60vh',
                }}
          >
            <h3>Merci pour votre message, je reviens vers vous rapidement.</h3>
          </div>
      </Layout>
    );
  }
}

export default ContactPage;