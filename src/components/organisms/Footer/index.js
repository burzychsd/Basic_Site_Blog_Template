// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Footer = () => {
    return (
        <Flex as='footer' reset css={tw`w-full flex-col bg-black`} style={{ height: 350, flexShrink: 0 }}>
        </Flex>
    )
}

export default Footer