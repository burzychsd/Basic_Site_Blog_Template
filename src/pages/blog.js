// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import BlogAboveTheFold from '../components/organisms/BlogAboveTheFold'
import BlogList from '../components/organisms/BlogList'

const BlogPage = () => (
    <Fragment>
        <SEO title="Blog" keywords={[`website`, `personal`, `blog`]} />
        <BlogAboveTheFold />
        <BlogList posts={['First post', 'Second Post', 'Third Post', 'Fourth Post', 'Fifth Post']} />
    </Fragment>
)

export default BlogPage