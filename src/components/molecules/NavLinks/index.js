// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import { useTrail, animated } from 'react-spring'

// COMPONENTS
import NavLink from './../../atoms/NavLink'
import Flex from './../../atoms/Flex'

const AnimatedNavLink = animated(NavLink)

const NavLinks = (props) => {

    const { links, cssNav, mobileMenu, style, trail, onClick } = props

    const navTrail = useTrail(links.length, {
        config: { mass: 1, tension: 280, friction: 20 },
        opacity: 1,
        x: 0,
        from: { opacity: 0, x: -20 }
    })

    const navLinkProps = {
        activeClassName: `NavLink--active`
    }

    const navListProps = {
        className: `${mobileMenu ? 'NavList_mobileMenu' : 'NavList'}`,
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

    return (
        <Flex {...navListProps} css={cssNav}>
            {mobileMenu ? trail.map(({ x, height, ...rest }, index) => 
                <AnimatedNavLink {...animatedNavLinkProps} key={shortid.generate()} to={index === 0 ? '/' : `/${links[index].toLowerCase().replace(/\s+/g, '-')}`} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>{links[index]}</AnimatedNavLink>
            ) : navTrail.map(({ x, height, ...rest }, index) => 
                <AnimatedNavLink {...navLinkProps} key={shortid.generate()} to={index === 0 ? '/' : `/${links[index].toLowerCase().replace(/\s+/g, '-')}`} style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>{links[index]}</AnimatedNavLink>
            )}
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