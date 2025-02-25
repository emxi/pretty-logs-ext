import { Editor, loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import root from 'react-shadow'
import PaintBrushOutlineIcon from '../../assets/svgs/paint-brush/PaintBrushOutlineIcon'
import SparklesOutlineIcon from '../../assets/svgs/sparkles/SparklesOutlineIcon'
import { panelActions } from '../../redux/slices/panel-slice'
import { RootState } from '../../redux/store'
import monacoStyles from '../../styles/monaco.css?inline'
import { StringUtils } from '../../utils/string-utils'

monaco.editor.defineTheme('my-theme', {
  base: 'vs',
  inherit: true,
  rules: [],
  colors: {
    'editor.background': '#ffffff77',
    'minimap.background': '#ffffff77',
  },
})
loader.config({ monaco })

export default function HomePage() {
  const setting = useSelector((state: RootState) => state.setting)
  const panelState = useSelector((state: RootState) => state.panel)
  const dispatch = useDispatch()

  useEffect(() => {
    let escapedText = panelState.text
    try {
      if (setting.common.isAutoEscape) {
        escapedText = StringUtils.unescapeRecursive(escapedText)
      }
      if (setting.common.isAutoFormat) {
        escapedText = StringUtils.format(escapedText, setting.editor.tabSize)
      }
      dispatch(panelActions.setEditingText(escapedText))
    } catch {
      dispatch(panelActions.setEditingText(escapedText))
    }
  }, [panelState.text])

  return (
    <div className="h-full">
      <div className="flex h-full flex-col">
        <div className="flex space-x-1 px-3 py-3">
          <button
            className="flex items-center space-x-1 rounded-md border border-violet-500 px-2 py-1 text-violet-600 hover:border-violet-700 hover:bg-violet-600/10"
            onClick={() =>
              dispatch(
                panelActions.setEditingText(
                  StringUtils.unescapeIfCould(panelState.editingText)
                )
              )
            }
          >
            <SparklesOutlineIcon className="size-5" />
            <p className="text-violet-600">Unescape</p>
          </button>
          <button
            className="flex items-center space-x-1 rounded-md border border-violet-500 px-2 py-1 text-violet-600 hover:border-violet-600 hover:bg-violet-600/10"
            onClick={() =>
              dispatch(
                panelActions.setEditingText(
                  StringUtils.format(
                    panelState.editingText,
                    setting.editor.tabSize
                  )
                )
              )
            }
          >
            <PaintBrushOutlineIcon className="size-5" />
            <p className="text-violet-600">Format</p>
          </button>
        </div>
        <root.div mode="open" className="flex-1 border-t">
          <style type="text/css">{monacoStyles}</style>
          <Editor
            height="100%"
            defaultLanguage="json"
            value={panelState.editingText}
            onChange={(text) =>
              dispatch(panelActions.setEditingText(text || ''))
            }
            options={{
              wordWrap: 'on',
              padding: {
                top: 4,
              },
            }}
            theme="my-theme"
          />
        </root.div>
      </div>
    </div>
  )
}
