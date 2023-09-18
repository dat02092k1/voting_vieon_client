import { createSlice } from '@reduxjs/toolkit'
import { Rapper } from '../../../types/interface'
import { getRappers } from '../api/apiRequest'
 
const initialState = {
  rappers: [] as Rapper[],
  loading: false,
  error: false,
};

export const rapperSlice = createSlice({
  name: 'rappers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getRappers.fulfilled, (state, action) => {
      state.loading = false; 
      console.log(action.payload)
      state.rappers = action.payload;
    })
    .addCase(getRappers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getRappers.rejected, (state, action) => {
      console.log(action.error.message);  
      state.loading = false;
      state.rappers = [];
      state.error = false;    
    })
  }
})

export const {  } = rapperSlice.actions;
export default rapperSlice.reducer;