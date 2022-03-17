import { Link } from "react-router-dom"

const NavbarContainer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Eventos</a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active text-purple link-page" to="/"></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-purple link-page" data-page="carga" >Agregar Producto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavbarContainer