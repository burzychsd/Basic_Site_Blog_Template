// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../atoms/Section'
import Heading from './../../atoms/Heading'
import Flex from './../../atoms/Flex'
import Card from './../../molecules/Card'
import Title from './../../molecules/Title'

const HomeAboveTheFold = () => {

    const cardProps = {
        className: `info_card`
    }

    return (
        <Section>
            <Title containerCss={tw`rounded-lg`}>
                Basic Site
                <span style={{ color: '#9EE493', margin: '0 0.25em' }}>/</span>
                Blog Template.
            </Title>
            <Flex reset css={tw`mt-4 justify-between flex-wrap`}>
                <Card {...cardProps} css={tw`flex flex-col items-center h-full bg-grey-lighter rounded-lg`} />
                <Card {...cardProps} css={tw`flex flex-col items-center h-full bg-grey-lighter rounded-lg`} />
                <Card {...cardProps} css={tw`flex flex-col items-center h-full bg-grey-lighter rounded-lg`} />
            </Flex>
        </Section>
    )
}

export default HomeAboveTheFold