// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'
import Flex from './../../atoms/Flex'
import Card from './../../molecules/Card'
import Title from './../../molecules/Title'

const HomeAboveTheFold = () => {

    const sectionProps = {
        sectionReset: true,
        sectionCss: { ...tw`w-full flex flex-col px-4 sm:px-6 py-6` },
        container: false
    }

    const titleProps = {
        containerReset: true,
        containerCss: { ...tw`rounded-lg justify-center` }
    }

    const cardProps = {
        className: `info_card`,
        cardCss: { ...tw`flex flex-col items-center bg-grey-lighter rounded-lg` }
    }

    return (
        <Section {...sectionProps}>
            <Title {...titleProps}>
                Basic Site
                <span style={{ color: '#9EE493', margin: '0 0.25em' }}>/</span>
                Blog Template.
            </Title>
            <Flex reset css={tw`mt-4 justify-between flex-wrap`}>
                <Card {...cardProps} />
                <Card {...cardProps} />
                <Card {...cardProps} />
            </Flex>
        </Section>
    )
}

export default HomeAboveTheFold