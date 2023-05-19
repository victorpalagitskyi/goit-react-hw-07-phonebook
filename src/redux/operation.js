import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://64659ccd228bd07b354e4d88.mockapi.io/contacts/'
 
export const contactsApi = createAsyncThunk('contacts/allContacts',
  async () => { 
    const res = await axios.get('contacts')
    return res.data
  })

export const addContact = createAsyncThunk('contacts/addContacts',
    async (contact, thunkAPI) => { 
      try {
        const res = await axios.post('contacts', contact)
        return res.data
      } catch (e) { 
        return thunkAPI.rejectWithValue(e.message);
      }
    })
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => { 
    try {
      const res = await axios.delete(`contacts/${id}`)
      return res.data
    } catch (e) { 
      return thunkAPI.rejectWithValue(e.message);
    }
  })
  
 
    
