// DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

export const Bar = styled.div`
    ${props => props.reset ? null : tw`w-11/12 h-5 bg-black rounded-sm`};
`

const Hamburger = ({ style, onClick, css }) => (
    <Flex style={style} onClick={onClick}>
        <Bar reset={css ? true : false} css={css} />
        <Bar reset={css ? true : false} css={css} />
    </Flex>
)

Hamburger.propTypes = {
    style: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    css: PropTypes.string
}

export default Hamburger