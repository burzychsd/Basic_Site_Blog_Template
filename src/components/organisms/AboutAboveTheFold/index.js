// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'
import Title from './../../molecules/Title'
import Flex from './../../atoms/Flex'

const AboutAboveTheFold = () => {

    const sectionProps = {
        sectionReset: true
    }

    const titleProps = {
        containerReset: true
    }

    const flexProps = {
        style: { height: 300 },
        reset: true
    }

    return (
        <Section {...sectionProps} sectionCss={tw`w-full flex flex-col p-6`}>
            <Title {...titleProps} containerCss={tw`rounded-lg justify-center`}>
                About Page Template.
            </Title>
            <Flex {...flexProps} css={tw`mt-4 flex-col bg-grey-lighter rounded-lg`}>

            </Flex>
        </Section>
    )
}

export default AboutAboveTheFold