import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { panelActions } from '../../redux/slices/panel-slice'
import { RootState } from '../../redux/store'

export default function BlankPage() {
  const [text, setText] = useState('')
  const blankPageText = useSelector(
    (state: RootState) => state.panel.blankPageText
  )
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    setText(blankPageText)
  }, [])
  return (
    <div className="h-full p-3">
      <div
        className="h-full rounded border bg-white/20 p-1 outline-none focus:ring-2 focus:ring-violet-500"
        contentEditable
        onInput={(e) =>
          dispatch(
            panelActions.setBlankPageText(e.currentTarget.textContent || '')
          )
        }
      >
        {text}
      </div>
    </div>
  )
}
