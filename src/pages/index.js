// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Layout from '../components/templates/Layout'
import SEO from '../components/templates/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
  </Layout>
)

export default IndexPage