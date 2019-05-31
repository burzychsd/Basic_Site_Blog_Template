// DEPENDENCIES
import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'

// COMPONENTS
import SEO from '../SEO'
import BlogAboveTheFold from '../../organisms/BlogAboveTheFold'
import BlogList from '../../organisms/BlogList'

const BlogPage = props => {

    const { data, pageContext } = props

    const blogListProps = {
        posts: data.posts.edges,
        pageContext,
        location
    }

    return (
        <Location>
            {({ location }) => (
                <Fragment>
                    <SEO title="Blog" keywords={[`website`, `personal`, `blog`]} />
                    <BlogAboveTheFold />
                    <BlogList {...blogListProps} />
                </Fragment>
            )}
        </Location>
    )
}

export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(sort: {order: DESC, fields: createdAt}, skip: $skip, limit: $limit) {
        edges {
          node {
            slug
            title
            shortText
            image {
              file {
                url,
                fileName
              }
            }
          }
        }
    }
}
`

export default BlogPage