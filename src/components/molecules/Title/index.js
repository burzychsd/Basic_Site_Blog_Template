// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Heading from './../../atoms/Heading'

const Title = (props) => {

    const { containerCss, containerReset, 
        headingCss, headingReset, children } = props

    const containerProps = {
        css: containerCss,
        reset: containerReset
    }

    const headingProps = {
        css: headingCss,
        reset: headingReset
    }

    return (
        <Flex css={containerCss}>
            <Heading css={headingCss}>
                {children}
            </Heading>
        </Flex>
    )
}

Title.propTypes = {
    containerCss: PropTypes.object,
    containerReset: PropTypes.bool,
    headingCss: PropTypes.object,
    headingReset: PropTypes.bool
}

export default Title