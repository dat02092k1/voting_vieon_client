import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Rapper, UsersState } from '../../../types/interface'
import { logOut, login } from '../api/apiRequest'
import { utilFuncs } from '../../../utils/utils'
import { utilContainer } from '../../../shared/constants/utilContainer'
 
// Define the initial state using that type
const initialState = {
  currentUser: null as UsersState | null,
  loading: false,
  error: false,
  loggedIn: false,
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
      state.loggedIn = false; 
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false; 
      state.currentUser = action.payload.user;
      utilFuncs.setStorage(utilContainer.HEADER.AUTHORIZATION, action.payload.token);
      state.loggedIn = true;
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.loggedIn = false;
    })
    .addCase(login.rejected, (state, action) => {
      console.log(action);  
      state.loading = false;
      state.error = true;    
      state.loggedIn = false; 
    })
    .addCase(logOut.fulfilled, (state, action) => {
      console.log(action); 
      state.loading = false; 
      state.currentUser = null;
      utilFuncs.clearStorage();  
      state.loggedIn = false;
    })
    .addCase(logOut.pending, (state) => {
      state.loading = true;
    })
    .addCase(logOut.rejected, (state, action) => {
      console.log(action);  
      state.loading = false;
      state.error = true;    
    })
  }
})

export const { logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;