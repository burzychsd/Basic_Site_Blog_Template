// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import HomeAboveTheFold from '../components/organisms/HomeAboveTheFold'

const IndexPage = () => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <HomeAboveTheFold />
    </Fragment>
)

export default IndexPage