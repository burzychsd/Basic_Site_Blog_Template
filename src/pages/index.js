// DEPENDENCIES
import React from "react"

// COMPONENTS
import Layout from "../components/templates/Layout"
import SEO from "../components/templates/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
    <h1>Basic Site/Blog Template</h1>
  </Layout>
)

export default IndexPage
