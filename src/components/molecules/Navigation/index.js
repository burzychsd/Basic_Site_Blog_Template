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

const Navigation = ({ links, mobile, height, onClickHamburger, onClickLogo, logoStatus }) => (
    <Flex as='nav' reset css={tw`w-full px-6 items-center justify-between`} style={{ height: height }}>
        <DelayLink delay={800} to='/' style={{ height: 55 }}><Logo className={`${logoStatus ? 'b-highlight b-highlight--active' : 'b-highlight'}`} style={{ cursor: 'pointer', height: 55 }} onClick={onClickLogo} /></DelayLink>
        {
            mobile ? 
            <Hamburger style={{ width: 'auto', height: 20, cursor: 'pointer', justifyContent: 'space-between', background: 'transparent' }} onClick={onClickHamburger} /> : 
            <NavLinks links={links} cssNav={tw`list-none`} />
        }
    </Flex>
)

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
    mobile: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    onClickHamburger: PropTypes.func.isRequired,
    onClickLogo: PropTypes.func,
    logoStatus: PropTypes.bool
}

export default Navigation