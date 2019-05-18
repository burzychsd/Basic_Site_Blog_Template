// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Text = styled.p`
    ${props => props.reset ? null : tw`font-body text-lg`};
`

export default Text