// DEPENDENCIES
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const NavLink = styled(Link)`
    ${props => props.reset ? null : tw`relative mx-3 no-underline font-heading text-2xl lg:inline-block text-black`};
`

export default NavLink