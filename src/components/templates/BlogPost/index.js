// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

// COMPONENTS
import SEO from './../SEO'
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'

const BlogPost = ({ pageContext }) => {

    const { slug, title, src, author, date, content } = pageContext

    const articleProps = {
        as: `article`,
        reset: true
    }

    const topContainerProps = {
        reset: true,
        style: { height: 300 }
    }

    const imgContainerProps = {
        reset: true,
        style: { background: `url('${src}') no-repeat center center / cover`, borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }
    }

    return (
        <Fragment>
            <SEO title={`${slug}`} keywords={[`website`, `personal`, `blog`]} />
            <Flex {...articleProps} css={tw`flex-col items-center m-6`}>
                <Flex {...topContainerProps} css={tw`w-full flex-col-reverse sm:flex-row`}>
                    <Flex reset css={tw`w-full sm:w-1/2 sm:h-full flex-col justify-end`} style={{ minHeight: 100 }}>
                        <Heading style={{ maxWidth: 250, margin: 0 }}>{title}</Heading>
                        <Flex reset css={tw`justify-between flex-wrap items-center`} style={{ maxWidth: 200 }}>
                            <Text css={tw`mt-2`}>{author}</Text>
                            <Text css={tw`mt-2`}>{date.slice(0, 10)}</Text>
                        </Flex>
                    </Flex>
                    <Flex {...imgContainerProps} css={tw`w-full sm:w-1/2 h-full`}></Flex>
                </Flex>
                <Flex as='hr' reset css={tw`w-5/6 my-12 bg-black border-none h-px self-start`} />
                <Flex className='post_body' reset css={tw`block items-start`} dangerouslySetInnerHTML={{ __html: content }} />
            </Flex>
        </Fragment>
    )
}

BlogPost.propTypes = {
    pageContext: PropTypes.object.isRequired
}

export default BlogPost