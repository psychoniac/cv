import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/projets">Mes projets</Link>
                </li>
                <li>
                    <Link to="/contact">Contacter moi</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar