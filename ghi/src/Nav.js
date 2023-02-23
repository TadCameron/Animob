import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">Animob</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
                <ul className="dropdown-menu bg-dark">
                  <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/login">See inventory</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/logout">See car models</NavLink></li>
                </ul>
            </div>
            </ul>
        </div>
        </div>
    </nav>
  )
}
export default Nav;
