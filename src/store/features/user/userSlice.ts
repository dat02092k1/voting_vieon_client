import { createSlice } from '@reduxjs/toolkit'
import { UsersState } from '../../../types/interface'
import { logOut, login, signUp, vote } from '../api/apiRequest'
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
  initialState,
  reducers: {
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
      console.log(action.error.message);  
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
    .addCase(signUp.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false; 
      state.error = false;
      state.currentUser = action.payload.user;
      utilFuncs.setStorage(utilContainer.HEADER.AUTHORIZATION, action.payload.token);
      state.loggedIn = true;
    })
    .addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(signUp.rejected, (state, action) => {
      console.log(action.error.message);
      state.loading = false;
      state.error = true;
    })
    .addCase(vote.fulfilled, (state) => {
      if (state.currentUser) state.currentUser.votesRemaining -= 1;
    })
  }
})

export const { logout } = userSlice.actions
 
export default userSlice.reducer;