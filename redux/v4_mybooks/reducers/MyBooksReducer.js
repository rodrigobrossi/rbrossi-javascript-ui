// external modules
import update from 'react-addons-update';

// actions
import { SET_BOOKS_DATA, ADD_BOOK } from '../actions/MyBooksActions';

const initialState = {
  books: [],
  isFetching: false,
  initSpinner: false,
};

export const myBooks = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS_DATA:
      return update(state, {
        [action.payload.property]: {
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
