import { Checkbox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { OpenPanelType, settingActions } from '../../redux/slices/setting-slice'
import { RootState } from '../../redux/store'

export default function SettingPage() {
  const setting = useSelector((state: RootState) => state.setting)
  const dispatch = useDispatch()
  console.log(setting)

  function handleUpdateTriggerOpenPanel(value: OpenPanelType) {
    dispatch(
      settingActions.updateSetting({
        ...setting,
        common: {
          ...setting.common,
          triggerOpenPanel: value,
        },
      })
    )
  }

  function handleUpdateIsAutoEscape(value: boolean) {
    dispatch(
      settingActions.updateSetting({
        ...setting,
        common: {
          ...setting.common,
          isAutoEscape: value,
        },
      })
    )
  }

  function handleUpdateIsAutoFormat(value: boolean) {
    dispatch(
      settingActions.updateSetting({
        ...setting,
        common: {
          ...setting.common,
          isAutoFormat: value,
        },
      })
    )
  }

  return (
    <div className="h-full space-y-2 p-3">
      <div className="">
        <h2 className="mb-2 text-lg font-semibold">Common</h2>
        <div className="space-y-3">
          <div>
            <p className="mb-1 font-semibold">Open panel when:</p>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded border border-slate-400 bg-white/50 px-2 py-0.5 text-sm focus:outline-none"
                value={setting.common.triggerOpenPanel}
                onChange={(e) =>
                  handleUpdateTriggerOpenPanel(e.target.value as OpenPanelType)
                }
              >
                <option value={OpenPanelType.OnSelect}>On select text</option>
                <option value={OpenPanelType.ToggleButton}>
                  On click toggle button
                </option>
                <option value={OpenPanelType.ToggleExt}>
                  Just on click extension icon
                </option>
              </select>
              <ChevronDownIcon
                className="group pointer-events-none absolute right-2.5 top-1 size-4"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <p className="mb-1 font-semibold">Auto when open panel:</p>
            <div className="flex items-center space-x-3">
              <Checkbox
                className="group flex cursor-pointer items-center space-x-1"
                checked={setting.common.isAutoEscape}
                onChange={handleUpdateIsAutoEscape}
              >
                <div className="flex size-5 items-center justify-center rounded border border-slate-400 bg-white/30 group-data-[checked]:bg-white/70">
                  <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                </div>
                <span>Unescape recursive</span>
              </Checkbox>

              <Checkbox
                className="group flex cursor-pointer items-center space-x-1"
                checked={setting.common.isAutoFormat}
                onChange={handleUpdateIsAutoFormat}
              >
                <div
                  className="flex size-5 items-center justify-center rounded border border-slate-400 bg-white/30 group-data-[checked]:bg-white/70"
                  id="is-auto-format"
                >
                  <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                </div>
                <span>Format</span>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
