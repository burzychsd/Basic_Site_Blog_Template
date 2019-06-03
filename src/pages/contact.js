// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import ContactAboveTheFold from '../components/organisms/ContactAboveTheFold'

const ContactPage = () => (
    <Fragment>
        <SEO title="Contact" keywords={[`website`, `personal`, `blog`]} />
        <ContactAboveTheFold />
    </Fragment>
)

export default ContactPage