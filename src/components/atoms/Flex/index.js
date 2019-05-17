// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Flex = styled.div`
    ${props => props.reset ? null : tw`w-full flex flex-col items-center h-full bg-grey-lighter`};
`

export default Flex