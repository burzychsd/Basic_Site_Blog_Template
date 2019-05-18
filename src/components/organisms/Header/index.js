// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'

// ACTIONS
import { setMobileMenuStatus, setLogoStatus } from './actions'

const Header = ({ setMobileMenuStatus, setLogoStatus, logoStatus, height }) => {

    const handleMobileMenu = () => setMobileMenuStatus()

    return (
        <Flex as='header' reset css={tw`w-full h-auto absolute z-40`} style={{ top: '1.5rem', right: 0, left: 0 }}>
            <Navigation 
            links={[`Home`, `About`, `Blog`, `Contact`]}
            mobile={false}
            height={height}
            onClickHamburger={handleMobileMenu}
            onClickLogo={setLogoStatus}
            logoStatus={logoStatus} />
        </Flex>
    )
}

Header.propTypes = {
    height: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    logoStatus: state.logo.logoStatus
})

export default connect(mapStateToProps, { setMobileMenuStatus, setLogoStatus })(Header)