import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { searchBarReducer } from './searchBarSlice';
//////////////////////////////////////////////
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: searchBarReducer,
    },
});