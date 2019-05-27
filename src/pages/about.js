// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import AboutAboveTheFold from '../components/organisms/AboutAboveTheFold'
import AboutDescription from '../components/organisms/AboutDescription'

const AboutPage = () => (
    <Fragment>
        <SEO title="About" keywords={[`website`, `personal`, `blog`]} />
        <AboutAboveTheFold />
        <AboutDescription />
    </Fragment>
)

export default AboutPage