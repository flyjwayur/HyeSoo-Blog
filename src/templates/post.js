import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import styles from "./post.module.scss"

export default ({ data }) => {
  console.log("data", data)
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.container}>
        <Title text={post.frontmatter.title} />
        {/* CSS in JS */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#fafafa",
            backgroundImage:
              "Url(https://res.cloudinary.com/dfy0o45bw/image/upload/c_scale,h_800,w_1800/v1546504616/samples/landscapes/beach-boat.jpg)",
          }}
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

//filter by slug field
//one MarkdownRemark node with text equal to sth in slug field
//After node is fetched, fields are post
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`
