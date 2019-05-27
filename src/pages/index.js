// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import HomeAboveTheFold from '../components/organisms/HomeAboveTheFold'
import HomeDescription from '../components/organisms/HomeDescription'
import HomeFeatures from '../components/organisms/HomeFeatures'

const IndexPage = () => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <HomeAboveTheFold />
        <HomeDescription />
        <HomeFeatures />
    </Fragment>
)

export default IndexPage