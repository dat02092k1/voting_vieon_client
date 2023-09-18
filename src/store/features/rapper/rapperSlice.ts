import { createSlice } from '@reduxjs/toolkit'
import { Rapper } from '../../../types/interface'
import { getRappers } from '../api/apiRequest'
 
// Define the initial state using that type
const initialState = {
  rappers: [] as Rapper[],
  loading: false,
  error: false,
};

export const rapperSlice = createSlice({
  name: 'rappers',
  // `createSlice` will infer the state type from the `initialState` argument
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

export const {  } = rapperSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default rapperSlice.reducer;