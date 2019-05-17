// DEPENDENCIES
import React from "react"

// COMPONENTS
import Layout from "../components/templates/Layout"
import SEO from "../components/templates/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage