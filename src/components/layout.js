import React from "react"
import styles from "./layout.module.scss"
import Header from "./header/header"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)
