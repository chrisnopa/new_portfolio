import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'
import BlogRow from '../../components/blog-row'

class BlogIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {

      const posts = this.props.data.allFile.edges
      console.log(posts)
      const styles = StyleSheet.create({
        cont: {
          display: 'flex',
          padding: '0 0 0 128px',
          color: 'rgba(26, 26, 26, 0.9)',
        },
        left: {
          width: '40%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '32px'
        },
        blogPosts: {

        }
      });
      
      return (
        <Layout>
          <div className={css(styles.cont)}>
            <div className={css(styles.left)}>
              Blog
            </div>

            <div className={css(styles.blogPosts)}>
              {posts.map(post =>(
                <BlogRow title={post.node.name}/>
            ))}
            </div>
          </div>
        </Layout>
      );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allFile(filter: { relativePath: {regex : "\/blog/"} }){
      edges{
        node{
          id
          name
        }
      }
    }
  }
`
