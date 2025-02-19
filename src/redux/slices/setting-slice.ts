import { createSlice } from '@reduxjs/toolkit'

export type SettingState = {
  editor: {
    tabSize: number
    wordWrap: 'on' | 'off'
  }
  toggleButton: {}
  automation: {
    isAutoFormat: boolean
    isAutoEscape: boolean
    isTriggerOnSelect: boolean
    isAutoFindBracket: boolean
  }
}

const DEFAULT_SETTING_STATE: SettingState = {
  editor: {
    tabSize: 2,
    wordWrap: 'on',
  },
  toggleButton: {},
  automation: {
    isAutoFormat: true,
    isAutoEscape: true,
    isTriggerOnSelect: true,
    isAutoFindBracket: true,
  },
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState: DEFAULT_SETTING_STATE,
  reducers: {
    // updateSetting: (state, action: PayloadAction<SettingState>) => {
    //   state = action.payload
    // },
  },
})

export const settingActions = settingSlice.actions
export default settingSlice.reducer
