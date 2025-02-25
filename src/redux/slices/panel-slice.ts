import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PanelState = {
  page: string
  text: string
  isShow: boolean
  blankPageText: string
}

const DEFAULT_PANEL_STATE: PanelState = {
  page: '/home',
  text: '',
  isShow: false,
  blankPageText: '',
}

export const panelSlice = createSlice({
  name: 'panel',
  initialState: DEFAULT_PANEL_STATE,
  reducers: {
    show: (state) => {
      state.isShow = true
    },

    hide: (state) => {
      state.isShow = false
    },

    setText(state, action: PayloadAction<string>) {
      state.text = action.payload
    },

    setBlankPageText(state, action: PayloadAction<string>) {
      state.blankPageText = action.payload
    },
  },
})

export const panelActions = panelSlice.actions
export default panelSlice.reducer
