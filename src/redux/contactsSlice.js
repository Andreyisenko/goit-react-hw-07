// src/redux/tasksSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
// import { build } from 'vite';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    fetchContactsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContacts = state => state.contacts.items;

export const {
  addContact,
  deleteContact,
  fetchContactsSuccess,
  setError,
  setLoading,
} = slice.actions;

export const contactsReducer = slice.reducer;
