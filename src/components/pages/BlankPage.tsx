import { useDispatch, useSelector } from 'react-redux'
import { panelActions } from '../../redux/slices/panel-slice'
import { RootState } from '../../redux/store'

export default function BlankPage() {
  const blankPageText = useSelector(
    (state: RootState) => state.panel.blankPageText
  )
  const dispatch = useDispatch()
  return (
    <div className="h-full p-3">
      <textarea
        className="h-full w-full resize-none rounded border bg-white/20 p-1 outline-none focus:ring-2 focus:ring-violet-500"
        onChange={(e) =>
          dispatch(panelActions.setBlankPageText(e.target.value))
        }
      >
        {blankPageText}
      </textarea>
    </div>
  )
}
