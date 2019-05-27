// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'
import Title from './../../molecules/Title'
import Flex from './../../atoms/Flex'

const AboutAboveTheFold = () => {

    const sectionProps = {
        sectionReset: true,
        sectionCss: { ...tw`w-full flex flex-col px-4 sm:px-6 py-6` }
    }

    const titleProps = {
        containerReset: true,
        containerCss: { ...tw`rounded-lg justify-center` }
    }

    const flexProps = {
        style: { height: 300 },
        reset: true
    }

    return (
        <Section {...sectionProps}>
            <Title {...titleProps}>
                About Page Template.
            </Title>
            <Flex {...flexProps} css={tw`mt-4 flex-col bg-grey-lighter rounded-lg`}>

            </Flex>
        </Section>
    )
}

export default AboutAboveTheFold