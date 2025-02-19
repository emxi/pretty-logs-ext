import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PanelState = {
  page: string
  text: string
  isShow: boolean
}

const DEFAULT_PANEL_STATE: PanelState = {
  page: '/home',
  text: '',
  isShow: false,
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
  },
})

export const panelActions = panelSlice.actions
export default panelSlice.reducer
