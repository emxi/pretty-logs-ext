import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ToggleButtonState = {
  position: {
    x: number
    y: number
  }
  selectedText: string
  isShow: boolean
}

const DEFAULT_TOGGLE_BUTTON_DATA: ToggleButtonState = {
  position: {
    x: 0,
    y: 0,
  },
  selectedText: '',
  isShow: false,
}

export const toggleButtonSlice = createSlice({
  name: 'toggleButton',
  initialState: DEFAULT_TOGGLE_BUTTON_DATA,
  reducers: {
    setPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.position.x = action.payload.x
      state.position.y = action.payload.y
    },

    show: (state) => {
      state.isShow = true
    },

    hide: (state) => {
      state.isShow = false
    },

    setSelectedText(state, action: PayloadAction<string>) {
      state.selectedText = action.payload
    },
  },
})

export const toggleButtonActions = toggleButtonSlice.actions
export default toggleButtonSlice.reducer
