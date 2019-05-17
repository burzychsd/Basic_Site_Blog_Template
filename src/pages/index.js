// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Layout from '../components/templates/Layout'
import SEO from '../components/templates/SEO'
import Flex from '../components/atoms/Flex'
import Button from '../components/atoms/Button'
import LazyLoader from '../components/atoms/LazyLoader'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
    <Flex as='section'>
      <h1>Basic Site/Blog Template</h1>
      <Flex reset css={tw`w-full sm:w-1/2 h-auto self-start justify-center bg-black`}>
        <Button>Button</Button>
      </Flex>
      <LazyLoader src='https://cdn.vox-cdn.com/thumbor/0tcbGYNYqluQ7tApRj3T5efdSJk=/0x0:2000x1233/1200x800/filters:focal(892x307:1212x627)/cdn.vox-cdn.com/uploads/chorus_image/image/63400228/nba_playoff_stories__1_.0.jpg' alt='pic' loadedClassName='img-loaded' loadingClassName='img-loading' />
    </Flex>
  </Layout>
)

export default IndexPage
