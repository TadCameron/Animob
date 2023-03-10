import { NavLink } from "react-router-dom";
import { useAuthContext } from "./components/useToken";

function Nav() {
  const { token } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navcolor">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          <img
            src="https://static.tvtropes.org/pmwiki/pub/images/bc_nero.png"
            alt=""
            width="40"
            height="50"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" id="cardtitles" to="/genres">
                DISCOVER
              </NavLink>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" id="cardtitles" to="/profile">
                    PROFILE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" id="cardtitles" to="/logout">
                    LOGOUT
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" id="cardtitles" to="/login">
                  LOGIN
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
