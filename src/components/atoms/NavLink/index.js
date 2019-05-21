// DEPENDENCIES
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const NavLink = styled(Link)`
    ${props => props.reset ? null : props.mobile ? tw`relative my-3 no-underline font-heading font-bold text-4xl text-black` : tw`relative mx-3 no-underline font-heading text-2xl lg:inline-block text-black`};
`

export default NavLink