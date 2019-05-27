// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import shortid from 'shortid'

// COMPONENTS
import Section from './../../molecules/Section'
import Card from './../../molecules/Card'
import LazyLoader from './../../molecules/LazyLoader'
import Title from './../../molecules/Title'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
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
        style: { width: 'calc(40% - 1.5rem)' },
        as: `aside`,
        reset: true
    }

    const cardProps = {
        className: `blog_card`,
        cardCss: { ...tw`flex flex-col items-center bg-black rounded-lg` }
    }

    const blogCards = posts.map((blog, i) => 
        <Card key={shortid.generate()} {...cardProps}>

        </Card>
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