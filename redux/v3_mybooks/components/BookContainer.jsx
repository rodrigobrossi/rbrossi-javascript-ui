import React, { Component } from 'react';

import Book from './Book'

const BookContainer = ({ books, searchString }) => (
  <div className="row">
    {
      books
      .filter(el => el.title.search(searchString) > -1)
      .map((book, index) => (<Book key={index} {...book} />))
    }
  </div>
);

export default BookContainer;
