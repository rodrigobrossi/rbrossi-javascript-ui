import React, { Component } from 'react';

import Book from './Book'

const BookContainer = ({ books }) => (
  <div className="row">
    {
      books.map((book, index) => (<Book key={index} {...book} />))
    }
  </div>
);

export default BookContainer;
