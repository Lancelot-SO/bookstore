import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [{
    item_id: 'item1',
    title: 'Legend of the Seeker',
    author: 'Olfol Leo',
    category: 'Adventure',
  },
  {
    item_id: 'item2',
    title: 'Queen Cleopatra',
    author: 'Leonidas',
    category: 'Nonfiction',
  }],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      bookstore: [...state.bookstore, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      bookstore: state.bookstore.filter((book) => book.item_id !== action.payload),
    }),
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
