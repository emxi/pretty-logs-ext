import clsx from 'clsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, NavLinkRenderProps, Route, Routes } from 'react-router'
import Cog6ToothSolidIcon from '../assets/svgs/cog-6-tooth/Cog6ToothSolidIcon.tsx'
import HomeSolidIcon from '../assets/svgs/home/HomeSolidIcon.tsx'
import LogoIcon from '../assets/svgs/logo/LogoIcon.tsx'
import XMarkSolidIcon from '../assets/svgs/x-mark/XMarkSolidIcon.tsx'
import { panelActions } from '../redux/slices/panel-slice.ts'
import HomePage from './pages/HomePage.tsx'
import SettingPage from './pages/SettingPage.tsx'
import ResizableSidebar from './ResizableSidebar.tsx'

export default function Panel() {
  const dispatch = useDispatch()

  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dispatch(panelActions.hide())
      }
    }
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  function getNavClassName({ isActive }: NavLinkRenderProps) {
    return clsx(
      'flex flex-1 items-center justify-center py-3 text-center hover:bg-violet-50',
      {
        'text-violet-600': isActive,
      }
    )
  }

  return (
    <ResizableSidebar>
      <div className="h-full w-full flex flex-col">
        <div className="flex items-center justify-between border-b p-3">
          <h1 className="flex items-center space-x-3 text-xl font-semibold">
            <LogoIcon />
            <p>Pretty logs</p>
          </h1>
          <button
            className="flex size-8 items-center justify-center rounded-full hover:bg-violet-50"
            onClick={() => dispatch(panelActions.hide())}
          >
            <XMarkSolidIcon />
          </button>
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Routes>
        </div>
        <div className="flex border-t">
          <NavLink to="/" className={getNavClassName}>
            <HomeSolidIcon />
          </NavLink>
          <NavLink to="/setting" className={getNavClassName}>
            <Cog6ToothSolidIcon />
          </NavLink>
        </div>
      </div>
    </ResizableSidebar>
  )
}
