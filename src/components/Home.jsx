// Importamos el 'useNavigate' de React Router, el Header y el fichero CSS:
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import '../styles/Home.css'

export default function Home() {

  const navigate = useNavigate(); // Declaramos un hook de navegación.

  return (
    <div className="home-contenedor">
      <Header />

      <main className="home-main">
        <h2>Benvingut als minijocs de la botiga!</h2>
        <p>Posa a prova els teus coneixements de català i videojocs per obtenir descomptes únics!</p>
        <p>Tria un dels minijocs disponibles:</p>

        <div className="jocs-grid">
          <button className="joc-card" onClick={() => navigate('/joc-paraules')}>
            Joc de Paraules
          </button>
          <button className="joc-card" onClick={() => navigate('/questionari')}>
            Questionari
          </button>
        </div>
      </main>
    </div>
  )
}