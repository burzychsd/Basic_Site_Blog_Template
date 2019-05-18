// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Heading = styled.h1`
    ${props => props.reset ? null : tw`font-heading text-3xl`};
`

export default Heading