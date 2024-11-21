import { useState } from "react";
const CtaSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario.
    console.log("Correo electrónico:", email);
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>¡Únete a nuestra comunidad!</h2>
            <p>Crea una cuenta y nunca te pierdas un evento.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingrese su correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                Registrarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
