import React from "react"
import Header from "../Header"
import styles from "./layout.module.scss"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)
