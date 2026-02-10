// Importamos funciones necesarias de React Router DOM:
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importamos componentes:
import Home from './components/Home'
import JocParaules from './components/JocParaules'
import Questionari from './components/Questionari'
import ResultatFinal from './components/ResultatFinal'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joc-paraules" element={<JocParaules />} />
          <Route path="/questionari" element={<Questionari />} />
          <Route path="/resultat" element={<ResultatFinal />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App