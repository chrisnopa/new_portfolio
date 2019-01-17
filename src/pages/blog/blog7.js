import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout/layout'

const Blog3 = () => (
  <Layout>
    <h1>Blog</h1>
    <p>Blog me up Three</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "The fourth of the blogaroonies",
  written: "09/26/2018",
  layoutType: "blog",
  category: "#ui #popular",
  path: "https://uxuimike.files.wordpress.com/2017/04/nielsen012.png?w=1180&h=300"
}