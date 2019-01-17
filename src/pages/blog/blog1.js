import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'

const Blog1 = () => (

  <Layout>
    <h1>Blog</h1>
    <p>Blog me up One</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog1

export const frontmatter = {
  title: "Shouldn't it be UE",
  written: "08/25/2018",
  category: "#ux #ui #design",
  layoutType: "blog",
  path: "https://uxuimike.files.wordpress.com/2017/05/wyndham02.jpg?w=1180&h=500"
}
