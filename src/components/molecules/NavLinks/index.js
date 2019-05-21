// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

// COMPONENTS
import NavLink from './../../atoms/NavLink'
import Flex from './../../atoms/Flex'

const AnimatedNavLink = animated(NavLink)

const NavLinks = (props) => {

    const { links, cssNav, mobileMenu, style, trail, onClick } = props

    const navLinkProps = {
        activeClassName: `NavLink--active`
    }

    const navListProps = {
        className: `${mobileMenu ? null : 'NavList'}`,
        as: `ul`,
        reset: mobileMenu ? true : false,
        displayNone: mobileMenu ? false : true,
        style
    }

    const animatedNavLinkProps = {
        onClick: () => onClick('close'),
        mobile: mobileMenu,
        activeClassName: `NavLink--active`
    }

    const navLinks = links.map((link, i) => 
        <NavLink {...navLinkProps} key={ shortid.generate() } to={i === 0 ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</NavLink>
    )

    return (
        <Flex {...navListProps} css={cssNav}>
            {mobileMenu ? trail.map(({ x, height, ...rest }, index) => 
                <AnimatedNavLink {...animatedNavLinkProps} key={links[index]} to={index === 0 ? '/' : `/${links[index].toLowerCase().replace(/\s+/g, '-')}`} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>{links[index]}</AnimatedNavLink>
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