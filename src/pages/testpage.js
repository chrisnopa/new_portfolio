import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const TestPage = () => (
  <Layout>
    <h1>Hi from the test page</h1>
    <p>Welcome to page of test 27</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TestPage