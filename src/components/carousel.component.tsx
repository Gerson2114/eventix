function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/vector-gratis/plantilla-banner-gradiente_23-2151174698.jpg?t=st=1731341474~exp=1731345074~hmac=2367aeed6ed4e98140bf2f0b0ddcd48f994a9376c63455106beae951eb370498&w=2000"
            className="d-block w-100"
            alt="Evento 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primer evento</h5>
            <p>Descripción del primer evento.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/psd-gratis/plantilla-banner-horizontal-actividad-social-caridad_23-2149058394.jpg?t=st=1731341692~exp=1731345292~hmac=f3e2771b0acc0de32aa5f7633f50b6c82f06e49775ba5d5b6f3399c7ee9b7e91&w=2000"
            className="d-block w-100"
            alt="Evento 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo evento</h5>
            <p>Descripción del segundo evento.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/psd-gratis/nuevo-concepto-banner-normal_23-2148581557.jpg?t=st=1732221514~exp=1732225114~hmac=a014524685fc8ac37586e1af49e3fa4e02780b27e2eced270de269d3b267f3cc&w=2000"
            className="d-block w-100"
            alt="Evento 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Tercer evento</h5>
            <p>Descripción del tercer evento.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
