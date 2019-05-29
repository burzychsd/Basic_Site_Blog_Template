// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import shortid from 'shortid'

// COMPONENTS
import Section from './../../molecules/Section'
import BlogCard from './../../molecules/BlogCard'
import Flex from './../../atoms/Flex'

const BlogList = (props) => {

    const { posts } = props

    const sectionProps = {
        sectionReset: true,
        sectionCss: { ...tw`w-full px-4 sm:px-6 pb-6` },
        container: true,
        containerCss: { ...tw`w-full flex justify-between p-4 bg-grey-lighter rounded-lg` },
        containerReset: true
    }

    const blogListProps = {
        className: `blog_list`,
        reset: true
    }

    const asideProps = {
        className: `aside_container`,
        style: { width: 'calc(35% - 1rem)' },
        as: `aside`,
        reset: true
    }

    const blogCards = posts.reverse().map((post, i) => 
        <BlogCard key={shortid.generate()} 
        title={post.title} 
        description={post.description}
        src={post.src}
        alt={post.alt} />
    )

    return (
        <Section {...sectionProps}>
            <Flex {...blogListProps} css={tw`flex-col justify-between`}>
                {blogCards}
            </Flex>
            <Flex {...asideProps} css={tw`flex-col justify-between bg-white rounded-lg`}>

            </Flex>
        </Section>
    )
}

BlogList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default BlogList