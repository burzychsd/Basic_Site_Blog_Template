// DEPENDENCIES
import React, { useState, Fragment } from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'
import MobileMenu from './../../molecules/MobileMenu'

const Header = (props) => {

    const [logoStatus, setLogo] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const setMobileMenuStatus = (status) => status === 'open' ? 
    setMobileMenu(mobileMenu => true) : setMobileMenu(mobileMenu => false)

    const setLogoStatus = () => setLogo(logoStatus => !logoStatus)

    const { height } = props

    const headerProps = {
        as: `header`,
        reset: true,
        style: { top: '1.5rem', right: 0, left: 0 }
    }

    const navigationProps = {
        links: [`Home`, `About`, `Blog`, `Contact`],
        height,
        setMobileMenuStatus,
        setLogoStatus,
        logoStatus
    }

    const mobileMenuProps = {
        links: navigationProps.links,
        status: mobileMenu,
        onClick: setMobileMenuStatus
    }

    return (
        <Fragment>
            <Flex {...headerProps} css={tw`w-full h-auto absolute z-40`}>
                <Navigation {...navigationProps} />
            </Flex>
            <MobileMenu {...mobileMenuProps} />
        </Fragment>
    )
}

Header.propTypes = {
    height: PropTypes.number.isRequired
}

export default Header