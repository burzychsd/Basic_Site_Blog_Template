// DEPENDENCIES
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const NavLink = styled(Link)`
    ${props => props.reset ? null : tw`block m-4 no-underline text-3xl lg:inline-block text-grey hover:text-white mr-4`};
`

export default NavLink