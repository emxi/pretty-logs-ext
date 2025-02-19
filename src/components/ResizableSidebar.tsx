import { useCallback, useEffect, useRef, useState } from 'react'

export default function ResizableSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(268)

  const startResizing = useCallback(() => {
    setIsResizing(true)
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const resize = useCallback(
    (mouseMoveEvent: React.MouseEvent | MouseEvent) => {
      if (isResizing) {
        setSidebarWidth(
          sidebarRef.current!.getBoundingClientRect().right -
            mouseMoveEvent.clientX
        )
      }
    },
    [isResizing]
  )

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  return (
    <div
      ref={sidebarRef}
      className="min-w-[500px] fixed text-sm bottom-0 right-0 top-0 z-[9999] flex border items-stretch border-l bg-white shadow-xl"
      style={{ width: sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      {children}
    </div>
  )
}
