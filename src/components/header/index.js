import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"

//HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

// HomeButton component
const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.homeButton}>{props.text}</div>
  </Link>
)

const SocialButton = props => {
  let style = styles.socialMediaButton
  let url = ""

  if (props.site === "linkedin") {
    url = "https://www.linkedin.com/in/" + props.username
  } else if (props.site === "github") {
    url = "https://www.github.com/" + props.username
  }

  return (
    //no referrer information to be leaked on following the link
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}</div>
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    //Result of this graphql query is going to be passed to the render property as data

    render={data => (
      <header className={styles.container}>
        <div className={styles.row}>
          <HomeButton to="/" text={data.site.siteMetadata.title} />
          <SocialButton site="github" username="flyjwayur">
            Github
          </SocialButton>
          <SocialButton site="linkedin" username="hyesoopark-developer">
            Linked In
          </SocialButton>
        </div>

        <div className={styles.row}>
          <HeaderLink className={styles.link} to="/" text="Home" />|
          <HeaderLink className={styles.link} to="/about" text="About" />
        </div>
      </header>
    )}
  />
)
