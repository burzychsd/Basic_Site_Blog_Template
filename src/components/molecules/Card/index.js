// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Card = (props) => {

    const { className, cardCss, children } = props

    const cardProps = {
        className
    }

    return (
        <Flex {...cardProps} reset css={cardCss}>{children}</Flex>
    )
}

Card.propTypes = {
    className: PropTypes.string.isRequired,
    cardCss: PropTypes.object.isRequired,
    children: PropTypes.node
}

export default Card