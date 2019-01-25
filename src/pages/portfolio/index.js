import React, { Component } from 'react'

import { graphql } from "gatsby"
import Layout from '../../components/layout/layout'
import Gallery from '../../components/gallery/gallery'

class BlogIndex extends Component {
  render() {    
    return (
      <Layout>
        <Gallery 
          edges={this.props.data.allJavascriptFrontmatter.edges}
        />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allJavascriptFrontmatter(filter: {frontmatter: {layoutType: {eq: "portfolio"}}}) {
      edges {
        node {
          node {
            id
            name
          }
          frontmatter {
            title
            written
            layoutType
            category
            path
          }
        }
      }
    }
  }
`
