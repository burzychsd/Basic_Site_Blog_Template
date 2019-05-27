// DEPENDENCIES
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// COMPONENT
import Flex from '../../atoms/Flex'

const Section = (props) => {

    const { height, sectionCss, sectionReset, container, containerCss, containerReset, children } = props

    const sectionProps = {
        as: `section`,
        reset: sectionReset
    }

    const containerProps = {
        style: { height },
        reset: containerReset
    }

    return (
        <Flex {...sectionProps} css={sectionCss}>
            {
                container ?
                <Flex {...containerProps} css={containerCss} >
                    {children}
                </Flex> : <Fragment>{children}</Fragment>
            }
        </Flex>
    )
}

Section.propTypes = {
    height: PropTypes.number,
    sectionCss: PropTypes.object,
    sectionReset: PropTypes.bool,
    container: PropTypes.bool,
    containerCss: PropTypes.object,
    containerReset: PropTypes.bool
}

export default Section