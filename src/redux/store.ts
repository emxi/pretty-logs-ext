import { configureStore } from '@reduxjs/toolkit'
import panelReducer from './slices/panel-slice.ts'
import settingReducer from './slices/setting-slice.ts'
import toggleButtonReducer from './slices/toggle-button-slice.ts'

export const store = configureStore({
  reducer: {
    toggleButton: toggleButtonReducer,
    panel: panelReducer,
    setting: settingReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
