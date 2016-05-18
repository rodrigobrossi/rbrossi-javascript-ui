import books from '../server/data';

export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {
    data: books
  }
});

export const SET_FETCHING = 'SET_FETCHING';
export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  payload: {
    data: isFetching
  }
});

export const fetchBooks = () => (dispatch) => {
  dispatch(setFetching(true));

  setTimeout(() => {
    dispatch(setBooks(books));
    dispatch(setFetching(false));
  }, 3000);
}

// es5
export var ADD_BOOK = 'ADD_BOOK';
export var addBook = function(book) {
  return {
    type: ADD_BOOK,
    payload: {
      data: book
    }
  }
};
