import { Link } from "react-router-dom";

function header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" style={{ alignItems: "flex-start" }}>
          {/* Logo "Eventix" */}
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-ticket"></i> Eventix
          </a>

          {/* Botón de menú para dispositivos móviles */}
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

          {/* Menú de navegación principal */}
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Tickets.html">
                  Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>

              {/* Menú de usuario para móviles */}
              <li className="nav-item dropdown d-lg-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownUser"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user d-none d-lg-block"></i> Usuario
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownUser"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Configuración
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Buscador de eventos */}
          <div
            className="d-none d-lg-flex ms-auto"
            style={{ marginRight: "20px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Buscar eventos"
            />
          </div>

          {/* Menú de usuario para pantallas grandes */}
          <div className="dropdown d-none d-lg-block">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user"></i> Usuario
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="profileDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Configuración
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
