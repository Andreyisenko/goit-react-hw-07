// src/redux/tasksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const selectFilter = state => state.filter.name  
export const { changeFilter } = slice.actions;

export const filterReducer = slice.reducer;
