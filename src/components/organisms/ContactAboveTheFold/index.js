// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Section from './../../molecules/Section'
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import { H2 as Heading } from './../../atoms/Heading'
import Title from './../../molecules/Title'
import ContactForm from './../../molecules/ContactForm'

const ContactAboveTheFold = () => {

    const sectionProps = {
        sectionReset: true,
        sectionCss: { ...tw`w-full flex flex-col px-4 sm:px-6 py-6` }
    }

    const titleProps = {
        containerReset: true,
        containerCss: { ...tw`rounded-lg justify-center` }
    }

    return (
        <Section {...sectionProps}>
            <Title {...titleProps}>Contact Page Template.</Title>
            <Flex reset css={tw`w-full max-w-md flex-col mx-auto lg:max-w-full lg:flex-row mt-4`} style={{ minHeight: 350, height: 'auto' }}>
                <Flex reset css={tw`w-full h-auto bg-grey-lighter lg:mb-0 lg:w-1/2 lg:h-full rounded-lg py-6`} style={{ minHeight: 300 }}>
                    <ContactForm />
                </Flex>
                <Flex reset css={tw`flex-col justify-center w-full mt-4 lg:m-0 lg:justify-end lg:w-1/2 h-full lg:pl-6`} style={{ minHeight: 300 }}>
                    <Heading css={tw`ml-2 lg:ml-4`}>Contact Us</Heading>
                    <Text css={tw`ml-2 lg:ml-4`}>Vivamus sit amet quam sit amet eros porttitor dignissim. 
                    Curabitur molestie neque mauris, in posuere augue aliquet tristique. 
                    Maecenas eleifend felis eu ex commodo malesuada. Quisque eget viverra enim.</Text>
                </Flex>
            </Flex>
        </Section>
    )
}

export default ContactAboveTheFold