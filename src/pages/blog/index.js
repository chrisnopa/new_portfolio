import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { graphql } from "gatsby"
import Layout from '../../components/layout'
import BlogRow from '../../components/blog-row'
import Pill from '../../components/pill'

class BlogIndex extends Component {

  constructor(props) {
      super(props);
      this.state = {
        tags: [
          {value: "All Posts", active: true},
          {value: "UX", active: false},
          {value: "UI", active: false},
          {value: "Design", active: false},
          {value: "Development", active: false},
          {value: "Popular", active: false},
        ]
      };
  }

  tagClick = (value) => {
    let ta = this.state.tags
    if (value === "All Posts"){
      this.setState({tags: [
        {value: "All Posts", active: true},
        {value: "UX", active: false},
        {value: "UI", active: false},
        {value: "Design", active: false},
        {value: "Development", active: false},
        {value: "Popular", active: false},
      ]})
    } else {
      ta.forEach(element => {
        if(element.value === "All Posts") {
          element.active = false
      }else if(element.value === value) {
              element.active = !element.active
        }
      });
      this.setState({
        tags: ta
      })
    }
  }

  render() {
    const edges = this.props.data.allJavascriptFrontmatter.edges
    const posts = edges.sort(function(a, b){return new Date(a.node.frontmatter.written) - new Date(b.node.frontmatter.written)});
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
      about: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '128px 128px 128px 256px',
        backgroundColor: 'rgba(252, 252, 252, 1)',
        color: 'rgba(51, 51, 51, 1)',
      },
      left: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '780px',
      },
      lefttop: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 48px 0 96px',
        flexGrow: '1',
      },
      desc: {
        margin: '32px 0 12px 0',
        fontSize: '16px'
      },
      tags: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      featured: {
        flexGrow: '0',
      },
      featuredtext: {
        margin: '0 0 0 96px',
        fontSize: '16px'
      },
      blogPosts: {
        flexGrow: '1',
        borderLeft: '1px solid rgba(128, 128, 128, 0.1)'
      }
    });
    
    return (
      <Layout>
        <div className={css(styles.cont)}>
          <div className={css(styles.left)}>
            <div className={css(styles.lefttop)}>
              <div>
                <h2 className="titles">Blog</h2>
                <div className="accent-bar" />
                <p className={css(styles.desc)}>Show post with the following tag(s)</p> 
              </div>
              <div className={css(styles.tags)}>
                {this.state.tags.map((tag, index) =>(
                  <Pill 
                    key={index}
                    active={tag.active}
                    click={this.tagClick}
                    value={tag.value}
                  />
                ))}
              </div>
            </div>
            <div className={css(styles.featured)}>
              <BlogRow 
                date={edges[1].node.frontmatter.written}
                title={edges[1].node.frontmatter.title}
                tags={edges[1].node.frontmatter.category}
                link={`blog/${edges[1].node.node.name}`}
                bg={edges[1].node.frontmatter.path}
                featured
              />
            </div>
          </div>

          <div className={css(styles.blogPosts)}>
            {posts.map(post =>(
              <BlogRow 
                key={post.node.node.id}
                date={post.node.frontmatter.written}
                title={post.node.frontmatter.title}
                tags={post.node.frontmatter.category}
                link={`blog/${post.node.node.name}`}
                bg={post.node.frontmatter.path}
              />
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
    allJavascriptFrontmatter(filter: {frontmatter: {layoutType: {eq: "blog"}}}) {
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
