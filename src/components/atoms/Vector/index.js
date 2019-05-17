// DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Img = styled.img`
    ${props => props.reset ? null : tw`w-full h-auto`};
`

const Vector = ({ css, src, alt, style }) => (
    <Img css={css} src={src} alt={alt} style={style} />
)

export default Vector