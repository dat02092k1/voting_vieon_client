import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'
import rapperReducer from './features/rapper/rapperSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  counters: counterReducer,
      user: userReducer,
      rappers: rapperReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
  })

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch