import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64c2251cfa35860baea14071.mockapi.io';

//FETCH ALL CONTACTS
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//ADD CONTACT
export const addContacts = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//DELETE CONTACT
export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contactId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})