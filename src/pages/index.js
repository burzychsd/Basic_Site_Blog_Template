// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Layout from '../components/templates/Layout'
import SEO from '../components/templates/Seo'
import Flex from '../components/atoms/Flex'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
    <Flex as='section'>
      <h1>Basic Site/Blog Template</h1>
      <Flex reset css={tw`w-1/2 h-5 self-start bg-black`} />
    </Flex>
  </Layout>
)

export default IndexPage
