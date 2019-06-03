// DEPENDENCIES
import React, { Fragment } from 'react'
import tw from 'tailwind.macro'
import NetlifyForm from 'react-netlify-form'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'
import FormField from './../../atoms/FormField'
import FormMessage from './../FormMessage'

const ContactForm = () => {

    const textField = {
        required: true,
        type: `text`,
        name: `name`,
        placeholder: `Username...`
    }

    const emailField = {
        required: true,
        type: `email`,
        name: `email`,
        placeholder: `Email...`
    }

    const messageField = {
        required: true,
        tabIndex: 5,
        placeholder: `Message...`,
        name: 'message',
        as: `textarea`
    }

    return (
        <NetlifyForm name='contact_basic'>
        {({ loading, success, error }) => (
            <Flex reset css={tw`w-full h-full relative flex-col justify-around items-center`}>
                <FormMessage loading={loading} success={success} error={error} />
                <FormField {...textField} />
                <FormField {...emailField} />
                <FormField {...messageField} css={tw`resize-none`} style={{ minHeight: 120 }} />
                <Button type='submit' css={tw`my-2 bg-black`}>Submit</Button>
            </Flex>
        )}
        </NetlifyForm>
    )
}

export default ContactForm