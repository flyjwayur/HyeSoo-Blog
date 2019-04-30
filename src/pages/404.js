import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "./404.module.scss"

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
