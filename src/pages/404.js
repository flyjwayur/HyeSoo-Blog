import React from "react"
import styles from "./404.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"

//https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/add-404-page.md
export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>Page not found</h1>
      <p className={styles.errorMessage}>The page is not found</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
