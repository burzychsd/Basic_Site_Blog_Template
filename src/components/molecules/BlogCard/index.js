// DEPENDENCIES
import React, { useState, useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import Card from './../Card'
import LazyLoader from './../LazyLoader'
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'
import Text from './../../atoms/Text'
import { H2 as Heading } from './../../atoms/Heading'

const AnimatedText = animated(Text)
const AnimatedHeading = animated(Heading)
const AnimatedButton = animated(Button)

const BlogCard = (props) => {

    const { description, src, alt, title } = props

    const [ loaded, setLoaded ] = useState(false)

    const onLoad = () => setLoaded(true)

    const config = { mass: 1, tension: 280, friction: 20 }

    const styles = { opacity: loaded ? 1 : 0, 
        transform: loaded ? `translateY(0)` : `translateY(20px)`}

    const titleRef = useRef()
    const titleAnimation = useSpring({...styles, ref: titleRef, config})

    const descriptionRef = useRef()
    const descriptionAnimation = useSpring({...styles, ref: descriptionRef, config})

    const buttonRef = useRef()
    const buttonAnimation = useSpring({...styles, ref: buttonRef, config})

    useChain([descriptionRef, titleRef, buttonRef], [0.2, 0.34, 0.48])

    const cardProps = {
        className: `blog_card`,
        cardCss: { ...tw`flex flex-col items-center rounded-lg` }
    }

    const lazyLoaderProps = {
        src,
        alt,
        className: `blog_pic`,
        onLoad,
        loaded
    }

    const buttonProps = {
        style: { maxWidth: 120, ...buttonAnimation }
    }

    return (
        <Card {...cardProps}>
            <Flex reset css={tw`w-full h-full`}>
                <LazyLoader {...lazyLoaderProps} />
                <Flex className='blog_info' reset css={tw`flex-col bg-white h-full`}>
                <AnimatedHeading reset css={tw`m-0 font-heading text-2xl text-black mb-4`} style={titleAnimation}>{title}</AnimatedHeading>
                <AnimatedText style={descriptionAnimation}>{description}</AnimatedText>
                <AnimatedButton reset 
                css={
                tw` w-2/3 border-none 
                cursor-pointer 
                font-bold py-2 
                px-4  mt-4 rounded 
                text-white font-body bg-black hover:bg-blue-light self-end`}
                {...buttonProps}>Read More</AnimatedButton>
                </Flex>
            </Flex>
        </Card>
    )
}

BlogCard.propTypes = {
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default BlogCard