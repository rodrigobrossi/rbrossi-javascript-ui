import React, { Component } from 'react';

import Book from './Book'

class BookContainer extends Component {
  componentWillMount(){
    this.setState({
      books: [{
        id: 1,
        title: 'Game of Thrones',
        author: 'George Martin',
        description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.',
        image: 'images/got.jpg',
        isRead: false
      }, {
        id: 2,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
        image: 'images/lotr.jpg',
        isRead: false
      }, {
        id: 3,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.',
        image: 'images/hobbit.jpg',
        isRead: false
      }, {
        id: 4,
        title: 'Storm Of Swords',
        author: 'George Martin',
        description: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken.',
        image: 'images/stormofswords.jpg',
        isRead: false
      }]
    });
  }

  render(){
    return (
      <div className="row">
      {
        this.state.books
        .filter(el => (this.props.displayAll || !el.isRead))
        .filter(el => el.title.search(this.props.searchString) > -1)
        .map((book, index) => (<Book key={index} {...book} onIsRead={this.setRead.bind(this, book.id)} />))
      }
      </div>
    );
  }

  setRead(id){
    const book = this.state.books.filter(el => el.id === id);
    book[0].isRead = !book[0].isRead;

    this.setState({books: [...this.state.books]});
  }
}

export default BookContainer;
