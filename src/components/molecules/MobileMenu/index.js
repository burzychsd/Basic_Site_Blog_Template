// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import NavLinks from './../NavLinks'
import Portal from './../Portal'

const MobileMenu = ({ status }) => (
    <Portal status={status} css={tw`absolute w-4/5 max-w-xs h-full bg-white z-50`} style={{ top: 0, right: 0 }}>

    </Portal>
)

export default MobileMenu