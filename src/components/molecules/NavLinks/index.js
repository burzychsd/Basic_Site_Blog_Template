// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'

// COMPONENTS
import NavLink from './../../atoms/NavLink'
import Flex from './../../atoms/Flex'

const NavLinks = ({ links, css }) => {
    const navLinks = links.map((link, i) => 
        <NavLink key={shortid.generate()} to={i === 0 ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} activeClassName='NavLink--active'>{link}</NavLink>
    )

    return (
        <Flex as='ul' reset css={css}>
            {navLinks}
        </Flex>
    )
}

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
    css: PropTypes.string
}

export default NavLinks