import React, { Component } from 'react'

import BookWrapper from './BookWrapper'
import BookImage from './BookImage'
import BookBody from './BookBody'
import BookCheckbox from './BookCheckbox'

const Book = ({title, author, description, image}) => (
    <BookWrapper>
        <BookImage image={image} />
        <BookBody title={title} author={author} description={description} />
        <BookCheckbox />
    </BookWrapper>
)

export default Book;
