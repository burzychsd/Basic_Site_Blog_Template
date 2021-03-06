// DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Img = styled.img`
    ${props => props.reset ? null : tw`w-full h-auto`};
`

const Vector = (props) => {

    const { css, src, alt, style } = props

    const imgProps = { src, alt, style }

    return (
        <Img css={css} {...imgProps} />
    )
}

export default Vector