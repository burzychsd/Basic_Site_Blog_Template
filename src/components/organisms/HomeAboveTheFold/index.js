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
        container: false
    }

    const titleProps = {
        containerReset: true
    }

    const cardProps = {
        className: `info_card`
    }

    return (
        <Section {...sectionProps} sectionCss={tw`w-full flex flex-col p-6`}>
            <Title {...titleProps} containerCss={tw`rounded-lg justify-center`}>
                Basic Site
                <span style={{ color: '#9EE493', margin: '0 0.25em' }}>/</span>
                Blog Template.
            </Title>
            <Flex reset css={tw`mt-4 justify-between flex-wrap`}>
                <Card {...cardProps} cardCss={tw`flex flex-col items-center bg-grey-lighter rounded-lg`} />
                <Card {...cardProps} cardCss={tw`flex flex-col items-center bg-grey-lighter rounded-lg`} />
                <Card {...cardProps} cardCss={tw`flex flex-col items-center bg-grey-lighter rounded-lg`} />
            </Flex>
        </Section>
    )
}

export default HomeAboveTheFold