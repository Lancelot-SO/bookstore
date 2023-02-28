import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    // { id: '1', category: 'Fiction' },
    { id: '1', category: 'Nonfiction' },
    { id: '2', category: 'Adventure' },
  ],
};
export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkTheStatus: (state) => {
      if (state.categories.length === 0) {
        return {
          ...state,
          categories: [...state.categories, 'Not developed yet'],
        };
      }
      return {
        ...state,
        categories: state.categories,
      };
    },
  }
  ,

});
export const { checkTheStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
