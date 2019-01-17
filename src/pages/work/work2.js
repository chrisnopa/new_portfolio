import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'

const Blog2 = () => (
  <Layout>
    <h1>Blog</h1>
    <p>Blog me up Two.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog2

export const frontmatter = {
  title: "I am the second of the portfolios",
  written: "11/27/2018",
  layoutType: "portfolio",
  category: "#ux #design",
  path: "https://uxuimike.files.wordpress.com/2017/06/headbutt02.jpg?w=1280&h=400"
}