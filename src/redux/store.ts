import { configureStore, Middleware } from '@reduxjs/toolkit'
import panelReducer, { panelActions } from './slices/panel-slice.ts'
import settingReducer, { settingActions } from './slices/setting-slice.ts'
import toggleButtonReducer from './slices/toggle-button-slice.ts'

const localStorageMiddleware: Middleware<{}, any> =
  (_store) => (next) => (action) => {
    if (settingActions.updateSetting.match(action)) {
      localStorage.setItem(
        'pretty-logs-ext.setting',
        JSON.stringify(action.payload)
      )
    }
    if (panelActions.setBlankPageText.match(action)) {
      localStorage.setItem('pretty-logs-ext.blank-page-text', action.payload)
    }
    return next(action)
  }

export const store = configureStore({
  reducer: {
    toggleButton: toggleButtonReducer,
    panel: panelReducer,
    setting: settingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
