import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { UsersState } from '../../../types/interface'
import { login } from '../api/apiRequest'
 
// Define the initial state using that type
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false; 
      state.currentUser = action.payload; 
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
    })
    .addCase(login.rejected, (state, action) => {
      console.log(action);  
      state.loading = false;
      state.currentUser = null;
      state.error = false;    
    })
  }
})

export const { logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;