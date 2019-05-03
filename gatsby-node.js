const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

//Gets node from the Gatsby's node graph
exports.onCreateNode = ({ node, getNode, actions }) => {
  //It will called in every time (call once per each node) when node is created or updated at build time
  if (node.internal.type === "MarkdownRemark") {
    //Node's parent contains the actual file name, used to create the slug
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: "markdown" })
    createNodeField({
      //Markdown file node in this case
      node,
      name: "slug",
      value: slug,
    })
    console.log(
      `*** I am processing a node with type: ${
        node.internal.type
      }, slug: ${slug}`
    )
  }
}

//Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // result of the query
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/post.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
