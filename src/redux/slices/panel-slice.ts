import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PanelState = {
  page: string
  text: string
  editingText: string
  isShow: boolean
  blankPageText: string
}

const DEFAULT_PANEL_STATE: PanelState = {
  page: '/home',
  text: '',
  editingText: '',
  isShow: false,
  blankPageText: getBlankPageTextFromLocalStorage(),
}

function getBlankPageTextFromLocalStorage() {
  const localState = localStorage.getItem('pretty-logs-ext.blank-page-text')
  return localState || ''
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

    setEditingText(state, action: PayloadAction<string>) {
      state.editingText = action.payload
    },

    setBlankPageText(state, action: PayloadAction<string>) {
      state.blankPageText = action.payload
    },
  },
})

export const panelActions = panelSlice.actions
export default panelSlice.reducer
