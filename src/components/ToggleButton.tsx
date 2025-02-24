import { useDispatch, useSelector } from 'react-redux'
import LogoIcon from '../assets/svgs/logo/LogoIcon.tsx'
import { panelActions } from '../redux/slices/panel-slice.ts'
import { toggleButtonActions } from '../redux/slices/toggle-button-slice.ts'
import { RootState } from '../redux/store.ts'

export default function ToggleButton() {
  const state = useSelector((state: RootState) => state.toggleButton)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(toggleButtonActions.hide())
    dispatch(panelActions.show())
    dispatch(panelActions.setText(state.selectedText))
  }

  return (
    <button
      className="glass absolute z-[9999] rounded border p-1 hover:bg-violet-300/20"
      style={{
        left: `${state.position.x}px`,
        top: `${state.position.y + 20}px`,
      }}
      onClick={handleClick}
      onMouseUp={(e) => e.stopPropagation()}
    >
      <LogoIcon />
    </button>
  )
}
