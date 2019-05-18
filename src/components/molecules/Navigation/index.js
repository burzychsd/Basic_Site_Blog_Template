// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import shortid from 'shortid'
import PropTypes from 'prop-types'

// COMPONENTS
import Vector from '../../atoms/Vector'
import NavLink from '../../atoms/NavLink'
import Flex from '../../atoms/Flex'
import Hamburger from '../Hamburger'

const Navigation = ({ links, mobile, height, logo, onClickHamburger }) => {
    const navLinks = links.map((link, i) => 
        <NavLink key={shortid.generate()} to={i === 0 ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} activeClassName='NavLink--active'>{link}</NavLink>
    )

    return (
        <Flex as='nav' reset css={tw`w-full px-4 items-center justify-between`} style={{ height: height }}>
            <Vector src={logo} alt='logo' style={{ cursor: 'pointer', padding: '1rem 0', width: 45 }} />
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
    logo: PropTypes.string.isRequired,
    onClickHamburger: PropTypes.func.isRequired
}

export default Navigation