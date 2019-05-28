// DEPENDENCIES
import React from 'react'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import shortid from 'shortid'

// COMPONENTS
import Section from './../../molecules/Section'
import Card from './../../molecules/Card'
import LazyLoader from './../../molecules/LazyLoader'
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
        style: { width: 'calc(35% - 1rem)' },
        as: `aside`,
        reset: true
    }

    const cardProps = {
        className: `blog_card`,
        cardCss: { ...tw`flex flex-col items-center rounded-lg` }
    }

    const lazyLoaderProps = {
        src: `https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png`,
        alt: `placeholder`,
        containerClassName: `blog_pic_container`,
        className: `blog_pic`,
        loadedClassName: `img-loaded`,
        loadingClassName: `img-loading`
    }

    const blogCards = posts.reverse().map((blog, i) => 
        <Card key={shortid.generate()} {...cardProps}>
            <Flex reset css={tw`w-full h-full`}>
                <LazyLoader {...lazyLoaderProps} />
                <Flex className='blog_info' reset css={tw`flex-col bg-white h-full`}>
                    <Text as='h2' reset css={tw`m-0 font-heading text-2xl text-black mb-4`}>{blog}</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur venenatis eros auctor magna condimentum ornare. 
                    Pellentesque habitant morbi tristique.</Text>
                    <Button reset 
                    css={
                    tw` w-2/3 border-none 
                    cursor-pointer 
                    font-bold py-2 
                    px-4  mt-4 rounded 
                    text-white font-body bg-black hover:bg-blue-light self-end`} style={{ maxWidth: 120 }}>Read More</Button>
                </Flex>
            </Flex>
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