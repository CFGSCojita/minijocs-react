// Importamos 'Link' de React Router:
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <h1>PixelGame Shop - Minijocs</h1>
        <nav>
          <Link to="/">Inici</Link>
        </nav>
    </header>
  )
}