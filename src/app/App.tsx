import { ReduxProvider } from './providers'

import Router from './router'

import './styles/index.scss'

const App = () => {
  return (
    <ReduxProvider><Router /></ReduxProvider>

  )
}

export default App
