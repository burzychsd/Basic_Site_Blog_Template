// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import shortid from 'shortid'
import PropTypes from 'prop-types'

// COMPONENTS
import NavLink from '../../atoms/NavLink'
import Flex from '../../atoms/Flex'
import Hamburger from '../Hamburger'
import Logo from './../../../images/logo.svg'

const Navigation = ({ links, mobile, height, onClickHamburger, onClickLogo, logoStatus }) => {

    const navLinks = links.map((link, i) => 
        <NavLink key={shortid.generate()} to={i === 0 ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} activeClassName='NavLink--active'>{link}</NavLink>
    )

    return (
        <Flex as='nav' reset css={tw`w-full px-4 items-center justify-between`} style={{ height: height }}>
            <NavLink to='/'><Logo className={`${logoStatus ? 'b-highlight b-highlight--active' : 'b-highlight'}`} style={{ cursor: 'pointer', height: 55 }} onClick={onClickLogo} /></NavLink>
            {
                mobile ? 
                <Hamburger style={{ width: 50, height: 25, cursor: 'pointer' }} onClick={onClickHamburger} /> : 
                <Flex as='ul' reset css={tw`list-none`}>
                    {navLinks}
                </Flex>
            }
        </Flex>
    )
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
    mobile: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    onClickHamburger: PropTypes.func.isRequired,
    onClickLogo: PropTypes.func,
    logoStatus: PropTypes.bool
}

export default Navigation