// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Layout from '../components/templates/Layout'
import SEO from '../components/templates/SEO'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`website`, `personal`, `blog`]} />
  </Layout>
)

export default AboutPage