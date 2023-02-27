import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [{
    item_id: 'item1',
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    category: 'Adventure',
  },
  {
    item_id: 'item2',
    title: 'Ulysses',
    author: 'James Joyce',
    category: 'Action',
  },
  {
    item_id: 'item3',
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    category: 'Romance',
  }],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookstore.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookstore.splice(state.bookstore.findIndex(
        (book) => book.id === action.payload,
      ), 1);
    },
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
