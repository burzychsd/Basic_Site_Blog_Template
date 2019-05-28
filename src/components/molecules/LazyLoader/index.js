// DEPENDENCIES
import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import { Img } from '../../atoms/Vector'
import Flex from '../../atoms/Flex'

const _loaded = {}

const LazyLoader = (props) => {

    const { src, alt, style, containerClassName, loadedClassName, loadingClassName, onClick } = props

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
        <Flex className={containerClassName} reset>
            <LazyLoad once height='100%'>
                <Img {...imgProps} />
            </LazyLoad>
        </Flex>
    )

}

LazyLoader.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
    containerClassName: PropTypes.string,
    loadedClassName: PropTypes.string,
    loadingClassName: PropTypes.string,
    onClick: PropTypes.func
}

export default LazyLoader