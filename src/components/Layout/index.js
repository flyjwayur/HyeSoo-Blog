import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import styles from "./layout.module.scss"

export default ({ children }) => {
  const year = new Date().getFullYear()
  const copyright = `CopyRight ${String.fromCharCode(
    169
  )} ${year} Powered by HyeSoo`

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer>{copyright}</Footer>
    </div>
  )
}
