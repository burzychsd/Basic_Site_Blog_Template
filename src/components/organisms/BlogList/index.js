// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { navigate } from 'gatsby'

// COMPONENTS
import Section from './../../molecules/Section'
import BlogCard from './../../molecules/BlogCard'
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'

const BlogList = (props) => {

    const { posts, pageContext, location } = props
    const { previousPagePath, nextPagePath, pageNumber, numberOfPages } = pageContext

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

    const blogCards = posts.map((post, i) => 
        <BlogCard key={shortid.generate()} 
        title={post.node.title} 
        description={post.node.shortText}
        src={post.node.image.file.url}
        alt={post.node.image.file.fileName}
        slug={post.node.slug} />
    )

    const range = (start, stop, step) => {
        let a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return a;
    }

    const pagination = range(pageNumber, 
        pageNumber + 3 > numberOfPages ? numberOfPages : pageNumber + 6).map(number => {

            const condition = {
                one: location.pathname !== '/blog',
                two: location.pathname !== `/blog/page/${number}`
            }

            return (
                <Button key={shortid.generate()} reset
                css={tw`border-none cursor-pointer font-bold py-2 px-4 
                rounded mx-1 px-3`} 
                style={{ display: number !== 0 ? 'inherit' : 'none', background: `${(!condition.one && number === 1) || (!condition.two && number !== 1) ? '#9EE493' : '#393E41' }` }}
                onClick={e => number === 1 && condition.one ? navigate('/blog') : 
                              number !== 1 && condition.two ? navigate(`/blog/page/${number}`) : null}>
                    {number}
                </Button>
            )
        }
    )

    return (
        <Section {...sectionProps}>
            <Flex {...blogListProps} css={tw`flex-col justify-between`}>
                {blogCards}
                <Flex reset css={tw` flex-wrap justify-center`}>
                    {location.pathname !== '/blog' && 
                    <Button css={tw`mx-1`} onClick={e => navigate('/blog')}>First</Button>}
                    {pagination}
                    {location.pathname !== `/blog/page/${numberOfPages}` && <Button css={tw`mx-1`} onClick={e => navigate(`/blog/page/${numberOfPages}`)}>Last</Button>}
                </Flex>
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