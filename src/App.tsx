import { BrowserRouter } from 'react-router-dom'

import Rotes from './routes'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
