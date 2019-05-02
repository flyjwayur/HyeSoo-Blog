import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"

//data object
export default ({ data }) => (
  <Layout>
    <Title text="Welcome" title="Hei there" />
    <p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article>
          <div>
            <h1>{node.frontmatter.title}</h1>
            <div>{node.excerpt}</div>
          </div>
        </article>
      ))}
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero
      cursus, congue eros ut, auctor nisl. Nulla id vestibulum lorem. Sed nisi
      nisi, ultricies tempus tortor mollis, venenatis malesuada quam. Sed
      maximus lacus eget augue laoreet, sit amet faucibus dui gravida.
      Suspendisse eget ultrices ipsum. Mauris sed venenatis odio. Vivamus in
      blandit orci, at ullamcorper nisi. Donec et convallis purus. Vestibulum
      semper, eros at feugiat iaculis, ex nunc ullamcorper mi, a venenatis ipsum
      sem vitae urna. Duis elit urna, feugiat at placerat vel, condimentum et
      purus. Phasellus sit amet quam sollicitudin ligula sollicitudin mollis ut
      at sapien. Praesent quis ligula porttitor arcu rhoncus interdum a vitae
      leo. Praesent vel interdum risus.
    </p>
  </Layout>
)

export const query = graphql`
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
`
