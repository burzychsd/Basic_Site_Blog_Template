// DEPENDENCIES
import React, { Fragment, useRef } from 'react'
import tw from 'tailwind.macro'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import PropTypes from 'prop-types'
import { useChain, useSpring, useTrail, animated } from 'react-spring'

// COMPONENTS
import NavLinks from './../NavLinks'
import Flex from './../../atoms/Flex'
import CloseBtn from './../../../images/svg/close_btn.svg'

const AnimatedFlex = animated(Flex)

const MobileMenu = (props) => {

    const { links, status, onClick } = props

    const overlayRef = useRef()
    const overlayStyles = useSpring({ opacity: status ? 1 : 0, ref: overlayRef })

    const sidebarRef = useRef()
    const sidebarStyles = useSpring({ x: status ? 0 : 100, ref: sidebarRef })

    const trailRef = useRef()
    const config = { mass: 1, tension: 280, friction: 20 }
    const trail = useTrail(links.length, {
        config,
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        ref: trailRef,
        from: { opacity: 0, x: 20 },
    })

    useChain(status ? [overlayRef, sidebarRef, trailRef] : 
            [trailRef, sidebarRef, overlayRef], 
            status ? [0, 0.2, 0.3] : [0, 0.4, 0.2])

    const overlayProps = {
        id: `overlay_mobileMenu`,
        reset: true,
        onClick: () => onClick('close'),
        style: { ...overlayStyles, 
                visibility: overlayStyles.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }
    }

    const containerProps = {
        id: `container_mobileMenu`,
        reset: true,
        style: { top: 0, right: 0, zIndex: 1001, overflow: 'auto', 
                ...sidebarStyles, transform: sidebarStyles.x.interpolate(x => `translate3d(${x}%,0,0)`) }
    }

    const navLinksProps = {
        trail,
        onClick,
        links,
        mobileMenu: 'mobile',
        style: { minHeight: 400, maxHeight: 600 },
        cssNav: { ...tw`flex-col justify-center items-center w-full h-full py-4` }
    }

    const closeBtnProps = {
        className: status ? `close_btn close_btn--active` : 'close_btn',
        onClick: () => onClick('close'),
        style: { position: 'absolute', top: '2.5rem', right: '2rem', height: 30, cursor: 'pointer' }
    }

    return (
        <Fragment>
            {status && <RemoveScrollBar />}
            <AnimatedFlex {...overlayProps} />
            <AnimatedFlex {...containerProps} css={tw`fixed w-4/5 max-w-xs h-full bg-white`}>
                <CloseBtn {...closeBtnProps} />
                <NavLinks {...navLinksProps} />
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