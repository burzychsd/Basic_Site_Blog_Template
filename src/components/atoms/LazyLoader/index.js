// DEPENDENCIES
import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import tw from 'tailwind.macro'

// COMPONENTS
import { Img } from './../Vector'
import Flex from './../Flex'

const _loaded = {}

const LazyLoader = (props) => {

    const { src, alt, style, loadedClassName, loadingClassName, onClick } = props

    const [ loaded, setLoaded ] = useState(_loaded[src])

    const onLoad = () => {
        _loaded[src] = true
        setLoaded(true)
    }

    const className = `${loaded ? loadedClassName : loadingClassName}`

    const imgProps = {
        src,
        alt,
        className,
        onLoad,
        onClick,
        style
    }

    return (
        <Flex reset css={tw`bg-grey-lighter`}>
            <LazyLoad>
                <Img {...imgProps} />
            </LazyLoad>
        </Flex>
    )

}

export default LazyLoader