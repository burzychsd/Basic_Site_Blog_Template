// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from '../../atoms/Flex'
import Hamburger from '../Hamburger'
import Logo from './../../../images/logo.svg'
import NavLinks from './../NavLinks'
import DelayLink from './../../atoms/DelayLink'

const Navigation = (props) => {

    const { links, height, setMobileMenuStatus, setLogoStatus, logoStatus } = props

    const navigationProps = {
        as: `nav`,
        reset: true,
        style: { height }
    }

    const delayLinkProps = {
        delay: 800,
        to: `/`,
        style: { height: 55 }
    }

    const logoProps = {
        className: `${logoStatus ? 'b-highlight b-highlight--active' : 'b-highlight'}`,
        style: { cursor: `pointer`, ...delayLinkProps.style },
        onClick: setLogoStatus
    }

    const hamburgerProps = {
        style: { width: 'auto', height: 20, cursor: 'pointer', 
                justifyContent: 'space-between', background: 'transparent' },
        onClick: setMobileMenuStatus
    }

    const navLinksProps = {
        links
    }

    return (
        <Flex {...navigationProps} css={tw`w-full px-6 items-center justify-between`} >
            <DelayLink {...delayLinkProps}><Logo {...logoProps} /></DelayLink>
            <Hamburger {...hamburgerProps} /> 
            <NavLinks {...navLinksProps} cssNav={tw`list-none`} />
        </Flex>
    )
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    setMobileMenuStatus: PropTypes.func.isRequired,
    setLogoStatus: PropTypes.func,
    logoStatus: PropTypes.bool
}

export default Navigation