// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import { useTrail, animated } from 'react-spring'

// COMPONENTS
import NavLink from './../../atoms/NavLink'
import Flex from './../../atoms/Flex'

const AnimatedNavLink = animated(NavLink)

const NavLinks = ({ links, cssNav, mobileMenu, style, status, onClick }) => {
    const navLinks = links.map((link, i) => 
        <NavLink key={shortid.generate()} to={i === 0 ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} activeClassName='NavLink--active'>{link}</NavLink>
    )

    const config = { mass: 5, tension: 2000, friction: 200 }

    const trail = useTrail(links.length, {
        config,
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })


    return (
        <Flex as='ul' reset css={cssNav} style={style}>
            {mobileMenu ? trail.map(({ x, height, ...rest }, index) => 
                <AnimatedNavLink onClick={onClick} mobile={mobileMenu} key={links[index]} to={index === 0 ? '/' : `/${links[index].toLowerCase().replace(/\s+/g, '-')}`} activeClassName='NavLink--active' style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>{links[index]}</AnimatedNavLink>
            ) : navLinks}
        </Flex>
    )
}

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
    cssNav: PropTypes.object,
    mobileMenu: PropTypes.string,
    style: PropTypes.object
}

export default NavLinks