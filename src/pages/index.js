import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>This is the index page</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
  </Layout>
)
