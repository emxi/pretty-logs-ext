import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum OpenPanelType {
  OnSelect = 'ON_SELECT',
  ToggleButton = 'TOGGLE_BUTTON',
  ToggleExt = 'TOGGLE_EXT',
}

export type SettingState = {
  editor: {
    tabSize: number
    wordWrap: 'on' | 'off'
  }
  toggleButton: object
  common: {
    isAutoFormat: boolean
    isAutoEscape: boolean
    triggerOpenPanel: OpenPanelType
  }
}

const DEFAULT_SETTING_STATE: SettingState = (() => {
  const localState = localStorage.getItem('pretty-logs-ext.setting')
  if (localState) {
    return JSON.parse(localState)
  }

  return {
    editor: {
      tabSize: 2,
      wordWrap: 'on',
    },
    toggleButton: {},
    common: {
      isAutoFormat: true,
      isAutoEscape: true,
      triggerOpenPanel: OpenPanelType.ToggleButton,
    },
  }
})()

export const settingSlice = createSlice({
  name: 'setting',
  initialState: DEFAULT_SETTING_STATE,
  reducers: {
    updateSetting: (_state, action: PayloadAction<SettingState>) => {
      return action.payload
    },
  },
})

export const settingActions = settingSlice.actions
export default settingSlice.reducer
