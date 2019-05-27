// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'

const AboutDescription = () => {

    const sectionProps = {
        sectionReset: true,
        container: true,
        height: 500
    }

    return (
        <Section {...sectionProps} sectionCss={tw`w-full px-6 pb-6`} containerCss={tw`rounded-lg`}>

        </Section>
  )
}

export default AboutDescription