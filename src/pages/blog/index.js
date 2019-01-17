import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { graphql } from "gatsby"
import Layout from '../../components/layout/layout'
import BlogRow from '../../components/blog-row'
import Pill from '../../components/pill'

class BlogIndex extends Component {

  constructor(props) {
      super(props);
      const posts = this.props.data.allJavascriptFrontmatter.edges.sort(function(a, b){
        return new Date(b.node.frontmatter.written) - new Date(a.node.frontmatter.written)
      })
      this.state = {
        tags: [
          {value: "All Posts", active: true},
          {value: "UX", active: false},
          {value: "UI", active: false},
          {value: "Design", active: false},
          {value: "Development", active: false},
          {value: "Popular", active: false},
        ],
        filteredPosts: posts,
        sortedPosts: posts,
        isNewest: true
      };
  }

  tagClick = (value) => {
    let ta = this.state.tags
    let filter = []

    //Determin what pills should be turned on or off
    if (value === "All Posts"){
      ta = [
        {value: "All Posts", active: true},
        {value: "UX", active: false},
        {value: "UI", active: false},
        {value: "Design", active: false},
        {value: "Development", active: false},
        {value: "Popular", active: false},
      ]
      filter = []
    } else {
      ta.forEach(element => {
        if(element.value === "All Posts") {
          element.active = false
        }else if(element.value === value) {
          element.active = !element.active
        }
      });
    }

    //Create filter list to send to fliter function
    ta.forEach(element => {
      if(element.active) {
        if(element.value !== "All Posts"){
          filter.push(element.value)
        }
      }
    });

    //Check to see if the one button on was turned off, then turn on all posts
    if (filter.length === 0){
      ta = [
        {value: "All Posts", active: true},
        {value: "UX", active: false},
        {value: "UI", active: false},
        {value: "Design", active: false},
        {value: "Development", active: false},
        {value: "Popular", active: false},
      ]
    }

    this.setState({
      tags: ta
    })

    this.filterPosts(filter)
  }

  filterPosts = (tags, sorted) => {
    let gotem = true
    if (!sorted) {
      sorted =[...this.state.sortedPosts]
    }
    let filtered  = sorted.filter(function(post) {
      gotem = true

      //Loops through the filter tags and the posts to look for matching records
      tags.forEach(tag => {
        if(post.node.frontmatter.category.indexOf(String(tag.toLowerCase())) === -1) {
          gotem = false
        }
      })
      if (gotem){
        return post
      }
      return false
    })
    this.setState({
      filteredPosts: filtered
    })
  }

  sortNewest = () => {
    const p = [...this.state.sortedPosts]
    console.log(p)
    p.sort(function(a, b){
      return new Date(b.node.frontmatter.written) - new Date(a.node.frontmatter.written)
    })
    this.setState({
      isNewest: true,
      sortedPosts: p
    })
    this.triggerFilter(this.state.tags, p)
  }

  sortOldest = () => {
    const p = [...this.state.sortedPosts]
    p.sort(function(a, b){
      return new Date(a.node.frontmatter.written) - new Date(b.node.frontmatter.written)
    })
    this.setState({
      isNewest: false,
      sortedPosts: p
    })
    this.triggerFilter(this.state.tags, p)
  }

  triggerFilter(ta, p) {
    let filter = []
    //Create filter list to send to fliter function
    ta.forEach(element => {
      if(element.active) {
        if(element.value !== "All Posts"){
          filter.push(element.value)
        }
      }
    });
    this.filterPosts(filter, p)
  }

  render() {
    const edges = this.props.data.allJavascriptFrontmatter.edges
    const styles = StyleSheet.create({
      cont: {
        display: 'flex',
        padding: '0 0 0 0',
        color: 'rgba(26, 26, 26, 0.9)',
        '@media (min-width: 961px)': {
          padding: '0 0 0 128px',
        },
      },
      left: {
        width: '100%',
        height: '100vh',
        display: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '780px',
        fontSize: '32px',
        '@media (min-width: 961px)': {
          width: '40%',
          display: 'flex',
        },
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
      listCont: {
        width: '60%',
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid rgba(128, 128, 128, 0.1)',
        '@media (min-width: 961px)': {
          height: '100vh',
        },
      },
      list: {
        flexGrow: '1',
        overflowY: 'scroll',
        padding: '64px 0 0 0',
        '@media (min-width: 961px)': {
          '::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
          padding: '0 0 0 0',
        },
      },
      listHeader: {
        position: 'fixed',
        width: '100%',
        flexGrow: '0',
        zIndex: '9',
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0 12px 96px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderBottom: '1px solid rgba(128, 128, 128, 0.1)',
        fontSize: '16px',
        '@media (min-width: 961px)': {
          position: 'static',
          padding: '12px 0 12px 24px',
        },
      },
      listSort: {
        background: 'none',
        border: 'none',
        margin: '0 0 0 0',
        padding: '8px 12px 8px 12px',
        outline: 'none',
        cursor: 'pointer'
      },
      listCount: {
        margin: '0 0 0 18px',
        color: 'rgba(26, 26, 26, 0.6)',
      },
      listCountNum: {
        padding: '0 6px 0 6px',
        color: 'rgba(26, 26, 26, 1)',
        fontWeight: '800'
      },
      inactive: {
        color: 'rgba(26, 26, 26, 0.4)',
      },
      whoops: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(248, 248, 248, 1)',
        padding: '0 96px 0 96px',
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '28px',
        color: 'rgba(128, 128, 128, 1)',
      },
      sad: {
        fontSize: '96px',
        color: 'rgba(204, 204, 204, 1)',
        margin: '-96px 0 48px 0'
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

          <div className={css(styles.listCont)}>
            <div className={css(styles.listHeader)}>
              <button className={css(styles.listSort, this.state.isNewest ? styles.inactive : null)} onClick={this.sortOldest}>
                <i className="fas fa-long-arrow-alt-up"></i>
              </button>
              <button className={css(styles.listSort, this.state.isNewest ? null : styles.inactive)} onClick={this.sortNewest}>
                <i className="fas fa-long-arrow-alt-down"></i>
              </button>
              <div className={css(styles.listCount)}>
                <span className={css(styles.listCountNum)}>{this.state.filteredPosts.length}</span>
                of
                <span className={css(styles.listCountNum)}>{this.state.sortedPosts.length}</span>
                posts
              </div>
            </div>
            { this.state.filteredPosts.length < 1 &&
              <div className={css(styles.whoops)}>
                <div className={css(styles.sad)}><i className="far fa-frown"></i></div>
                Whoops, looks like there are not any posts matching those criteria.  Try changing the filter settings.
              </div>
            }
            <div className={css(styles.list)}>
              {this.state.filteredPosts.map(post =>(
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
