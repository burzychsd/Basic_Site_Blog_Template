// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Card = (props) => {

    const { className, css, children } = props

    const cardProps = {
        className,
        css
    }

    return (
        <Flex {...cardProps}>{children}</Flex>
    )
}

Card.propTypes = {
    className: PropTypes.string.isRequired,
    css: PropTypes.object.isRequired,
    children: PropTypes.node
}

export default Card