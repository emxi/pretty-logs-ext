import { Checkbox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SettingPage() {
  return (
    <div className="h-full space-y-2 p-3">
      <div className="">
        <h2 className="mb-2 text-lg font-semibold">Common</h2>
        <div className="space-y-2">
          <div>
            <p className="mb-1">Open panel when:</p>
            <div className="relative">
              <select className="block w-full appearance-none rounded border border-slate-400 bg-white/50 px-2 py-0.5 text-sm focus:outline-none">
                <option value="onSelect">On select text</option>
                <option value="toggleButton">On click toggle button</option>
                <option value="toggleExt">Just on click extension icon</option>
              </select>
              <ChevronDownIcon
                className="group pointer-events-none absolute right-2.5 top-1 size-4"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <p className="mb-1">Auto open penal:</p>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Checkbox className="group flex size-5 items-center justify-center rounded border border-slate-400 bg-white/30 data-[checked]:bg-white/70">
                  <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                </Checkbox>
                <span>Unescape recursive</span>
              </div>

              <div className="flex items-center space-x-1">
                <Checkbox className="group flex size-5 items-center justify-center rounded border border-slate-400 bg-white/30 data-[checked]:bg-white/70">
                  <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                </Checkbox>
                <span>Format</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
