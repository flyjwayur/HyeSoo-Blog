import React from "react"
import styles from "./404.module.css"

//https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/add-404-page.md
export default () => (
  <div>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>The page is not found</p>
  </div>
)
