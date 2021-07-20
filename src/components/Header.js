import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="nav-link " exact to="/">
            <img
              className="img-fluid"
              src="https://images-platform.99static.com/wxW0MGWKZG4a81naQ5NIwsY3GUY=/118x183:1063x1128/500x500/top/smart/99designs-contests-attachments/102/102364/attachment_102364155"
              style={{
                maxWidth: "11%",
              }}
              alt="logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink className="nav-link navBgColor" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navBgColor" to="/articles">
                  Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navBgColor" to="/chat">
                  Chat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navBgColor" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navBgColor" to="/aboutus">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
