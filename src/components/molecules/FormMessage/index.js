// DEPENDENCIES
import React, { Fragment, useState, useEffect } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'

const FormMessage = (props) => {

    const { loading, success, error } = props
    const [ show, setShow ] = useState(false)

    useEffect(() => {

        (loading || success || error) && setShow(true)

    }, [loading, success, error])

    return (
        <Fragment>
            {
                show && <Flex reset css={tw`w-full justify-between items-center h-16 p-4 absolute bg-white`} style={{ top: 0 }}>
                            <Text>
                            {
                                loading ? `Loading...` : success ? `Thank You!` : `Something went wrong ;(`
                            }
                            </Text>
                            <Button onClick={e => setShow(false)}>Close</Button>
                        </Flex>
            }
        </Fragment>
    )
}

export default FormMessage