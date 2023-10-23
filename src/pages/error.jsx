import { Link } from "react-router-dom"

function Error(){
    return (
        <div className="error-page">
            <h1>Erreur page</h1>
            <h2>Vous êtes  perdu....</h2>
            <Link to='/'>
                <button>Accueil</button>
        </Link>
        </div>
    )
}
export default Error 