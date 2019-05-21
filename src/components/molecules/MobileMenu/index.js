// DEPENDENCIES
import React, { Fragment, useRef } from 'react'
import tw from 'tailwind.macro'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import PropTypes from 'prop-types'
import { useChain, useSpring, useTrail, animated } from 'react-spring'

// COMPONENTS
import NavLinks from './../NavLinks'
import Portal from './../Portal'
import Flex from './../../atoms/Flex'

const AnimatedFlex = animated(Flex)

const MobileMenu = ({ links, status, onClick }) => {

    const overlayRef = useRef()
    const sidebarRef = useRef()
    const trailRef = useRef()

    const overlayStyles = useSpring({ opacity: status ? 1 : 0, ref: overlayRef })
    const sidebarStyles = useSpring({ x: status ? 0 : 100, ref: sidebarRef })
    const config = { mass: 5, tension: 2000, friction: 200 }

    const trail = useTrail(links.length, {
        config,
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        ref: trailRef,
        from: { opacity: 0, x: 20 },
    })

    useChain(status ? [overlayRef, sidebarRef, trailRef] : [trailRef, sidebarRef, overlayRef], [0, 0.2, 0.5])

    return (
        <Fragment>
            <RemoveScrollBar />
            <AnimatedFlex id='overlay_mobileMenu' reset onClick={onClick} style={{ ...overlayStyles, visibility: overlayStyles.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }} />
            <AnimatedFlex reset css={tw`fixed w-4/5 max-w-xs h-full bg-white`} style={{ ...{ top: 0, right: 0, zIndex: 1001, overflow: 'auto' }, ...sidebarStyles, transform: sidebarStyles.x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
                <NavLinks trail={trail} onClick={onClick} links={links} cssNav={tw`flex-col justify-center items-center w-full h-full p-4`} mobileMenu='mobile' style={{ minHeight: 400, maxHeight: 600 }} />
            </AnimatedFlex>
        </Fragment>
    )
}

MobileMenu.propTypes = {
    links: PropTypes.array.isRequired,
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default MobileMenu