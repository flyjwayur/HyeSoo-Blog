import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Article from "../../Article"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                image
                date(formatString: "MMMM YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            key={node.id}
            to="/"
            image={node.frontmatter.image}
            keywords={node.frontmatter.keywords}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    )}
  />
)
