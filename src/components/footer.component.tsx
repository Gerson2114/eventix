function footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Sección "Eventix" */}
          <div className="col-md-4">
            <h5>Eventix</h5>
            <p>
              Nuestra misión es conectar a las personas con los eventos que les
              apasionan.
            </p>
          </div>

          {/* Sección "Enlaces útiles" */}
          <div className="col-md-4">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Sección "Suscríbete" */}
          <div className="col-md-4">
            <h5>Suscríbete</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
