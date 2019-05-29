// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const defaultStyles = { ...tw`font-heading text-3xl text-black leading-normal mx-4` }

const H1 = styled.h1`
    ${props => props.reset ? null : defaultStyles};
`
const H2 = styled.h2`
    ${props => props.reset ? null : defaultStyles};
`
const H3 = styled.h3`
    ${props => props.reset ? null : defaultStyles};
`
const H4 = styled.h4`
    ${props => props.reset ? null : defaultStyles};
`
const H5 = styled.h5`
    ${props => props.reset ? null : defaultStyles};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5
}