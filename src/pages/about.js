import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>This is about page.</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
  </div>
)
