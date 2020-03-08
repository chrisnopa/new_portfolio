import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Download = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        file(relativePath: {eq: "cf-français.pdf"}) {
          publicURL
          name
        }
      }
    `}
    render={data => <a href={data.file.publicURL} download>Download {data.file.name}</a>}
  />
)

export default Download