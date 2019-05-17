// DEPENDENCIES
import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'

// COMPONENTS
import { Img } from './../Vector'

const _loaded = {}

const LazyLoader = ({ src, alt, style, loadedClassName, loadingClassName, onClick }) => {

    const [ loaded, setLoaded ] = useState(_loaded[src])

    const onLoad = () => {
        _loaded[src] = true
        setLoaded(true)
    }

    const className = `${loaded ? loadedClassName : loadingClassName}`

    return (
        <LazyLoad>
            <Img
            src={src}
            alt={alt}
            className={className}
            onLoad={onLoad}
            onClick={onClick}
            style={style} />
        </LazyLoad>
    )

}

export default LazyLoader