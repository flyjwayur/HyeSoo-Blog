import React from "react"
import { Link } from "gatsby"
import styles from "./article.module.scss"

export default props => (
  <Link to={props.to}>
    <article className={styles.articleBox} key={props.id}>
      <div className={styles.left}>
        <img src={props.image} alt={props.keywords} />
      </div>
      <div className={styles.right}>
        <h3>{props.title}</h3>
        <div className={styles.date}>{props.date}</div>
        <div>{props.excerpt}</div>
      </div>
    </article>
  </Link>
)
