import React, { Component } from 'react';

import Book from './Book'

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
        books: [
        {
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
        }
      ]
    };
  }
  componentWillMount(){
    console.log("will mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Don't update the component if the search string contains numbers
    return !nextProps.searchString.match(/\d+/g);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("will update");
  }

  render(){
    console.log("render");
    return (
      <div className="row">
      {
        this.state.books
        .filter(el => el.title.search(this.props.searchString) > -1)
        .map((book, index) => (<Book key={index} {...book} onIsRead={this.setRead.bind(this, book.id)} />))
      }
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
  }

  componentWillUnmount(){
    console.log("will unmount");
  }

  setRead(id){
    const book = this.state.books.filter(el => el.id === id);
    book[0].isRead = !book[0].isRead;

    this.setState({books: [...this.state.books]});
  }
}

export default BookContainer;
