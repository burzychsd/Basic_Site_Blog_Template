// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'

// COMPONENTS
import SEO from '../components/templates/SEO'
import BlogAboveTheFold from '../components/organisms/BlogAboveTheFold'
import BlogList from '../components/organisms/BlogList'

// DATA
import { posts } from './../dummy_data/posts'

const BlogPage = () => (
    <Fragment>
        <SEO title="Blog" keywords={[`website`, `personal`, `blog`]} />
        <BlogAboveTheFold />
        <BlogList posts={posts} />
    </Fragment>
)

export default BlogPage