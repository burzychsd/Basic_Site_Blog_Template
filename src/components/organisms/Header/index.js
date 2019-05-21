// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'
import MobileMenu from './../../molecules/MobileMenu'

// ACTIONS
import { setMobileMenuStatus, setLogoStatus } from './actions'

const Header = ({ setMobileMenuStatus, setLogoStatus, logoStatus, height, width, mobileMenu }) => {

    return (
        <Fragment>
            <Flex as='header' reset css={tw`w-full h-auto absolute z-40`} style={{ top: '1.5rem', right: 0, left: 0 }}>
                <Navigation 
                links={[`Home`, `About`, `Blog`, `Contact`]}
                mobile={width <= 500 ? true : false}
                height={height}
                onClickHamburger={setMobileMenuStatus}
                onClickLogo={setLogoStatus}
                logoStatus={logoStatus} />
            </Flex>
            {width <= 500 && <MobileMenu links={[`Home`, `About`, `Blog`, `Contact`]} status={mobileMenu} onClick={setMobileMenuStatus} />}
        </Fragment>
    )
}

Header.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    logoStatus: state.logo.logoStatus,
    mobileMenu: state.mobileMenu.mobileMenuStatus
})

export default connect(mapStateToProps, { setMobileMenuStatus, setLogoStatus })(Header)