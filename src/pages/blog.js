// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Layout from '../components/templates/Layout'
import SEO from '../components/templates/SEO'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`website`, `personal`, `blog`]} />
  </Layout>
)

export default BlogPage