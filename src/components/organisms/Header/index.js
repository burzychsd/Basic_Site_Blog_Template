// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'

// IMAGE
import logo from './../../../images/logo.svg'

// ACTIONS
import { setMobileMenuStatus } from './actions'

const Header = ({ setMobileMenuStatus, height }) => {

    const handleMobileMenu = () => setMobileMenuStatus()

    return (
        <Flex as='header' reset css={tw`w-full h-auto absolute z-40`} style={{ top: '1rem', right: 0, left: 0 }}>
            <Navigation 
            links={[`Home`, `About`, `Blog`, `Contact`]}
            mobile={false}
            height={height}
            logo={logo}
            onClickHamburger={handleMobileMenu} />
        </Flex>
    )
}

Header.propTypes = {
    height: PropTypes.number.isRequired
}

export default connect(null, { setMobileMenuStatus })(Header)