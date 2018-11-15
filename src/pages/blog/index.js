import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout'
import { Link } from 'gatsby'

const BlogIndex = () => (
    <StaticQuery
   query={graphql`
      query PagesQuery {
        allFile(filter: { relativePath: {regex : "\/blog/"} }){
            edges{
              node{
                id
                name
              }
            }
          }
        }
    `}
      render={data => 
      <Layout>
          <div>
              Here are the blog posts
          </div>
          {data.allFile.edges.map(post =>(
              <div key={post.node.id}>
                <Link to={`/blog/${post.node.name}`}>
                    {post.node.name}
                </Link>
              </div>
          ))}
      </Layout>
    }
    />
  )
  export default BlogIndex