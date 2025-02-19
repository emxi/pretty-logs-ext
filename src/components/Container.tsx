import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { panelActions } from '../redux/slices/panel-slice.ts'
import { toggleButtonActions } from '../redux/slices/toggle-button-slice.ts'
import { RootState } from '../redux/store.ts'
import findMatchingBracketInRange from '../utils/bracket-utils.ts'
import Panel from './Panel.tsx'
import ToggleButton from './ToggleButton.tsx'

function getPreviousSiblings(elem: Node): Node[] {
  const sibs: Node[] = []
  while ((elem = elem.previousSibling as Node)) {
    sibs.push(elem)
  }
  return sibs
}

export default function Container() {
  const toggleButtonState = useSelector(
    (state: RootState) => state.toggleButton
  )
  const setting = useSelector((state: RootState) => state.setting)
  const panelState = useSelector((state: RootState) => state.panel)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleTextSelection(event: MouseEvent) {
      const selection = window.getSelection()
      if (!selection) {
        return
      }

      const range = selection.getRangeAt(0)
      const nodeText = range.startContainer.parentNode!.textContent || ''
      const prevSiblingTextLength = getPreviousSiblings(
        range.startContainer
      ).reduce((prev, curr) => prev + (curr.textContent?.length || 0), 0)

      const matchedText = findMatchingBracketInRange(
        nodeText,
        range.startOffset + prevSiblingTextLength,
        range.startOffset + prevSiblingTextLength + range.toString().length
      )

      const text = matchedText?.content || ''
      if (text.length > 0) {
        if (setting.automation.isTriggerOnSelect) {
          dispatch(panelActions.setText(text))
          dispatch(panelActions.show())
        } else {
          dispatch(
            toggleButtonActions.setPosition({
              x: event.clientX + window.scrollX,
              y: event.clientY + window.scrollY,
            })
          )
          dispatch(toggleButtonActions.setSelectedText(text))
          dispatch(toggleButtonActions.show())
        }
      } else {
        dispatch(toggleButtonActions.hide())
      }
    }

    document.addEventListener('mouseup', handleTextSelection)

    return () => {
      document.removeEventListener('mouseup', handleTextSelection)
    }
  }, [dispatch])

  return (
    <>
      {toggleButtonState.isShow && <ToggleButton />}
      {panelState.isShow && <Panel />}
    </>
  )
}
