import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="col-md-3 col-lg-2 sidebar d-md-block bg-dark">
      <h4 className="text-center mb-4 text-light">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link active text-light">
            Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/usuarios" className="nav-link text-light">
            Usuarios
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/mantenimientos" className="nav-link text-light">
            Mantenimientos
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/estadisticas" className="nav-link text-light">
            Estadísticas
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/configuracion" className="nav-link text-light">
            Configuración
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
