import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import Container from './components/Container.tsx'
import { store } from './redux/store.ts'
import tailwindStyles from './styles/tailwind-output.css?inline'

export default function App() {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <style type="text/css">{tailwindStyles}</style>
        <Container />
      </MemoryRouter>
    </Provider>
  )
}
