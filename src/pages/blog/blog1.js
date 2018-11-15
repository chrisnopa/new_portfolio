import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const Blog1 = () => (
  <Layout>
    <h1>Blog</h1>
    <p>Blog me up One</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog1