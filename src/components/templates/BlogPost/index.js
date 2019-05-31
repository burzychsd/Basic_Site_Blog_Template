// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import SEO from './../SEO'
import LazyLoader from './../../molecules/LazyLoader'
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'

const BlogPost = (props) => {

    const { slug, title, src, alt, author, date, content } = props

    const articleProps = {
        as: `article`,
        reset: true
    }

    return (
        <Fragment>
            <SEO title={slug} keywords={[`website`, `personal`, `blog`]} />
            <Flex {...articleProps} css={`w-full, h-full flex-col items-center`}>

            </Flex>
        </Fragment>
    )
}

BlogPost.propTypes = {
    
}

export default BlogPost