// Importamos 'Link' de React Router, el fichero CSS y el logo:
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img/logo-black-removebg-preview.webp";

export default function Header() {
    return (
        <header>
            <a href="https://remotehost.es/student006/shop">
                <img
                    src={logo}
                    alt="PixelGame Shop logo"
                    className="header-logo"
                />
            </a>
            <h1>PixelGame Shop - Minijocs</h1>
            <nav>
                <Link to="/">Inici</Link>
            </nav>
        </header>
    );
}
