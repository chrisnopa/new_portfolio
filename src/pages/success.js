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
            <h3>Thanks for the message.</h3>
            <h2>I will get back to you shortly.</h2>
          </div>
      </Layout>
    );
  }
}

export default ContactPage;