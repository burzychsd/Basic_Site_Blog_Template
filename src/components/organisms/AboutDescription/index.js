// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'

const AboutDescription = () => {

    const sectionProps = {
        sectionReset: true,
        sectionCss: { ...tw`w-full px-6 pb-6` },
        container: true,
        containerCss: { ...tw`rounded-lg` },
        height: 500
    }

    return (
        <Section {...sectionProps}>

        </Section>
  )
}

export default AboutDescription