// external modules
import update from 'react-addons-update';

// actions
import { SET_BOOKS, ADD_BOOK } from '../actions/MyBooksActions';

const initialState = {
  books: []
};

export const myBooks = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return update(state, {
        books: {
          $set: action.payload.data,
        },
      });
    case ADD_BOOK:
      return update(state, {
        books: {
          $push: action.payload.data,
        },
      });
    default:
      return state;
  }
};
