// DEPENDENCIES
import React from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'

const DelayLink = ({ delay, to, click, children, style, activeClassName }) => {
    const handleClick = (e, location) => {
        e.stopPropagation()
        e.preventDefault()

        click ? click() : null

        if (location.pathname !== to) {
            setTimeout(() => navigate(to), delay)
        }

    }

    return (
        <Location>
            {
                ({ location }) => (
                    <Link to={to} onClick={e => handleClick(e, location)} activeClassName={activeClassName} style={style}>{children}</Link>
                )
            }
        </Location>
    )
}

DelayLink.propTypes = {
    delay: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    click: PropTypes.func,
    activeClassName: PropTypes.string
}

export default DelayLink