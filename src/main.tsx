import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

function render() {
  const container = document.createElement('pretty-logs-ext-render-root')
  document.body.appendChild(container)
  container.attachShadow({ mode: 'open' })
  createRoot(container.shadowRoot!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

render()

document.addEventListener('click', () => {
  if (!document.getElementsByTagName('pretty-logs-ext-render-root').length) {
    render()
  }
})
