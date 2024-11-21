import { Link } from "react-router-dom";
const EventList = () => {
  const events = [
    {
      id: 1,
      category: "taller",
      date: "2025-01-15",
      img: "https://img.freepik.com/psd-premium/folleto-fiesta-evento-moda-abstracta-luna_788212-174.jpg?w=826",
      title: "Cocina Vegana Creativa y Saludable",
      description:
        "Fecha: 15 de enero de 2025\nHora: 16:00 - 19:00 hrs\nUbicación: Estudio de Cocina",
      link: "EventoDetalle.html",
    },
    {
      id: 2,
      category: "feria",
      date: "2025-02-20",
      img: "https://img.freepik.com/psd-gratis/plantilla-volante-festival-musica-electro_23-2148947808.jpg?t=st=1731522233~exp=1731525833~hmac=806b2bf479a72168afed8652726f633fc8cc2e30511edc20aed30974ffad1e8c&w=1380",
      title: "Emprende Fest",
      description:
        "Fecha: 20-22 de febrero de 2025\nHora: 10:00 - 20:00 hrs\nUbicación: Parque Central",
      link: "#",
    },
    {
      id: 3,
      category: "exposicion",
      date: "2025-03-01",
      img: "https://img.freepik.com/psd-premium/diseno-volantes-eventos-musica-vivo_788212-504.jpg?w=826",
      title: "Miradas Contemporáneas",
      description:
        "Fecha: 1 de marzo - 30 de abril de 2025\nHora: 10:00 - 19:00 hrs\nUbicación: Galería de Arte",
      link: "#",
    },
    {
      id: 4,
      category: "conferencia",
      date: "2025-04-15",
      img: "https://img.freepik.com/psd-premium/flyer-fiesta-dj-concierto-musica-vivo-banner-publicacion-redes-sociales-historia-instagram_501590-84.jpg?w=826",
      title: "Futuro de la Inteligencia Artificial",
      description:
        "Fecha: 15 de abril de 2025\nHora: 14:00 - 18:00 hrs\nUbicación: Auditorio Municipal",
      link: "#",
    },
    {
      id: 5,
      category: "festival",
      date: "2025-05-01",
      img: "https://img.freepik.com/psd-premium/plantilla-diseno-volante-club-eventos_788212-1031.jpg?w=826",
      title: "Festival de Música Indie",
      description:
        "Fecha: 1-3 de mayo de 2025\nHora: 12:00 - 22:00 hrs\nUbicación: Parque de la Ciudad",
      link: "#",
    },
  ];

  return (
    <section className="event-list" style={{ marginTop: "20px" }}>
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <div
              key={event.id}
              className="col-md-4 mb-4"
              data-category={event.category}
              data-date={event.date}
            >
              <div className="card">
                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text" style={{ whiteSpace: "pre-line" }}>
                    {event.description}
                  </p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary">
                    Más información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
