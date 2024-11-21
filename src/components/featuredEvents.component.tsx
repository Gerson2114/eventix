function FeaturedEvents() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Events</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/psd-premium/tarjeta-visita-celebracion-dia-cerveza_23-2151302859.jpg?w=1380"
                className="card-img-top"
                alt="Event 1"
              />
              <div className="card-body">
                <h5 className="card-title">Event Name 1</h5>
                <p className="card-text">Brief description of the event.</p>
                <a href="#" className="btn btn-primary">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/psd-gratis/plantilla-tarjeta-visita-horizontal-fiesta-latina_23-2150638916.jpg?t=st=1731345946~exp=1731349546~hmac=f3f67f416a49678b1dd38984521dfde5c8960a52a8178cc8223895cad2d2f2f7&w=1380"
                className="card-img-top"
                alt="Event 2"
              />
              <div className="card-body">
                <h5 className="card-title">Event Name 2</h5>
                <p className="card-text">Brief description of the event.</p>
                <a href="#" className="btn btn-primary">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://img.freepik.com/vector-gratis/banners-fiesta-ano-nuevo-2020-foto_23-2148350866.jpg?t=st=1731346046~exp=1731349646~hmac=0e354a8b8ffdb21304f373fb660ac309287ab4d5bd5318ada5062bad88930428&w=1380"
                className="card-img-top"
                alt="Event 3"
              />
              <div className="card-body">
                <h5 className="card-title">Event Name 3</h5>
                <p className="card-text">Brief description of the event.</p>
                <a href="#" className="btn btn-primary">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedEvents;
