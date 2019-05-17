// DEPENDENCIES
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Button = styled.button`
    ${props => props.reset ? null : tw`border-none cursor-pointer font-bold py-2 px-4 rounded`};
    ${props => props.success ? tw`bg-green text-white hover:bg-blue`
             : props.alert ? tw`bg-yellow text-black hover:bg-blue hover:text-white`
             : props.error ? tw`bg-red text-white hover:bg-blue`
             : tw`bg-blue text-white hover:bg-green`}
`

export default Button