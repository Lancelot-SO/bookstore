import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: '1', category: 'Adventure' },
    { id: '2', category: 'Action' },
    { id: '3', category: 'Romance' },
  ],
};
export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkTheStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Not developed yet');
      }
    },

  },

});
export const { checkTheStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
