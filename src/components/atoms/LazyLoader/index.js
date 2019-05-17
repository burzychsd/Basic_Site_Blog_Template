// DEPENDENCIES
import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import tw from 'tailwind.macro'

// COMPONENTS
import { Img } from './../Vector'
import Flex from './../Flex'

const _loaded = {}

const LazyLoader = ({ src, alt, style, loadedClassName, loadingClassName, onClick }) => {

    const [ loaded, setLoaded ] = useState(_loaded[src])

    const onLoad = () => {
        _loaded[src] = true
        setLoaded(true)
    }

    const className = `${loaded ? loadedClassName : loadingClassName}`

    return (
        <Flex reset css={tw`bg-grey-lighter`}>
            <LazyLoad>
                <Img
                src={src}
                alt={alt}
                className={className}
                onLoad={onLoad}
                onClick={onClick}
                style={style} />
            </LazyLoad>
        </Flex>
    )

}

export default LazyLoader