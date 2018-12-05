import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>You are so vain,</h1>
    <p>you think this page is about you kid</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About