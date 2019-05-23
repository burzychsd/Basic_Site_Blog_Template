// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Section = styled.section`
    ${props => props.reset ? null : tw`w-full h-auto flex flex-col p-6`};
`

export default Section