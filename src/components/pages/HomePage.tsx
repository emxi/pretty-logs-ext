import { Editor, loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import root from 'react-shadow'
import PaintBrushOutlineIcon from '../../assets/svgs/paint-brush/PaintBrushOutlineIcon'
import SparklesOutlineIcon from '../../assets/svgs/sparkles/SparklesOutlineIcon'
import { RootState } from '../../redux/store'
import monacoStyles from '../../styles/monaco.css?inline'
import { StringUtils } from '../../utils/string-utils'

loader.config({ monaco })

export default function HomePage() {
  const [transformText, setTransformText] = useState('')
  const setting = useSelector((state: RootState) => state.setting)
  const panelState = useSelector((state: RootState) => state.panel)

  useEffect(() => {
    let escapedText = panelState.text
    try {
      if (setting.automation.isAutoEscape) {
        escapedText = StringUtils.unescapeRecursive(escapedText)
      }
      if (setting.automation.isAutoFormat) {
        escapedText = StringUtils.format(escapedText, setting.editor.tabSize)
      }
      setTransformText(escapedText)
    } catch {
      setTransformText(escapedText)
    }
  }, [panelState.text])

  return (
    <div className="h-full py-3">
      <div className="h-full flex flex-col space-y-3">
        <div className="flex space-x-1 px-3">
          <button
            className="px-2 py-1 border border-violet-500 text-violet-600 space-x-1 hover:bg-violet-50 hover:border-violet-600 rounded-md flex items-center"
            onClick={() =>
              setTransformText(StringUtils.unescapeIfCould(transformText))
            }
          >
            <SparklesOutlineIcon className="size-5" />
            <p className="text-violet-600">Unescape</p>
          </button>
          <button
            className="px-2 py-1 border border-violet-500 text-violet-600 space-x-1 hover:bg-violet-50 hover:border-violet-600 rounded-md flex items-center"
            onClick={() =>
              setTransformText(
                StringUtils.format(transformText, setting.editor.tabSize)
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
            value={transformText}
            onChange={(text) => setTransformText(text ?? '')}
            options={{
              wordWrap: 'on',
            }}
          />
        </root.div>
      </div>
    </div>
  )
}
