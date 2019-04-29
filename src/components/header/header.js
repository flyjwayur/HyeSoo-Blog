import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <Link to="/">HyeSoo's Blog</Link>
    </div>

    <div className={styles.row}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      |
      <Link className={styles.link} to="/about">
        About
      </Link>
    </div>
  </header>
)
