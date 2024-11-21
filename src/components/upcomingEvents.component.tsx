function UpcomingEvents() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Upcoming Events</h2>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/vector-gratis/portada-facebook-festival-musica-diseno-plano_23-2149171748.jpg?t=st=1731346855~exp=1731350455~hmac=53e960db31d210322601af1c2261be67d4d7d772101441685fa546506ccf204e&w=1800"
                className="d-block w-100"
                alt="Event 4"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Event 4: Event Name</h5>
                <p>
                  Short description of the event. Date: May 15, Time: 7:00 PM
                </p>
                <a href="#" className="btn btn-primary">
                  More Information
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/vector-gratis/portada-facebook-club-nocturno-degradado_23-2149973604.jpg?t=st=1731346924~exp=1731350524~hmac=8811e4f9f512718b31ee1bac382e5aecc3c93abdbd4a3e04d06545218ae192d5&w=1800"
                className="d-block w-100"
                alt="Event 5"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Event 5: Event Name</h5>
                <p>
                  Short description of the event. Date: May 15, Time: 7:00 PM
                </p>
                <a href="#" className="btn btn-primary">
                  More Information
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/vector-premium/banner-facebook-music-fest-tema-azul_973911-9.jpg?w=1800"
                className="d-block w-100"
                alt="Event 6"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Event 6: Event Name</h5>
                <p>
                  Short description of the event. Date: May 15, Time: 7:00 PM
                </p>
                <a href="#" className="btn btn-primary">
                  More Information
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
