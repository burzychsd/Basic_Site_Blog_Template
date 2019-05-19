// DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

export const Bar = styled.div`
    ${props => props.reset ? null : tw`bg-black rounded-sm self-end`};
`

const Hamburger = ({ style, onClick, css }) => (
    <Flex className='hamburger' style={style} onClick={onClick}>
        <Bar className='bar_hamburger' reset={css ? true : false} css={css} style={{ width: 40, height: 3 }} />
        <div className='bar_hamburger--hidden'></div>
        <div className='bar_hamburger--hidden'></div>
        <Bar className='bar_hamburger' reset={css ? true : false} css={css} style={{ width: 30, height: 3 }} />
    </Flex>
)

Hamburger.propTypes = {
    style: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    css: PropTypes.string
}

export default Hamburger