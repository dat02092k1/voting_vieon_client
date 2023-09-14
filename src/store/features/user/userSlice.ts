import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { UsersState } from '../../../types/interface'
 
// Define the initial state using that type
const initialState: UsersState = {
  email: '',
  password: '',
  isVIP: false,
  role: 'user',
  votesRemaining: 0, // in day
  votes: [],
  lastVoteDate: new Date(),
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUser: (state, action: PayloadAction<UsersState>) => {
      state = action.payload;
    },
  },
})

export const { updateUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;