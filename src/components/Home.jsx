import { Link } from "react-router-dom"
import Header from "./Header"

export default function Home() {
  return (
    <div>
        <Header />

        <h2>Benvingut als minijocs de la botiga!</h2>
        <p>Posa a prova els teus coneixements de català i videojocs per obtenir descomptes únics!</p>

        <Link to="/joc-paraules">Joc de Paraules</Link>
        <Link to="/questionari">Questionari</Link>
    </div>
  )
}