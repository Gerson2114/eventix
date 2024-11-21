import React from "react";

interface EventDetailProps {
  eventId: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const events = [
    {
      id: "1",
      category: "taller",
      date: "2025-01-15",
      img: "https://img.freepik.com/psd-premium/folleto-fiesta-evento-moda-abstracta-luna_788212-174.jpg?w=826",
      title: "Cocina Vegana Creativa y Saludable",
      description: "Un taller único sobre cocina vegana.",
      location: "Centro de convenciones",
    },
    {
      id: "2",
      category: "feria",
      date: "2025-02-20",
      img: "https://img.freepik.com/psd-gratis/plantilla-volante-festival-musica-electro_23-2148947808.jpg",
      title: "Emprende Fest",
      description: "Feria de emprendimiento para todos.",
      location: "Centro de convenciones",
    },
  ];

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <p>Evento no encontrado</p>;
  }

  return (
    <div id="ticket-selection" className="row align-items-center bg-light">
      <div className="col-md-6">
        <img
          src={event.img}
          className="img-fixed rounded"
          alt={`Imagen del evento ${event.title}`}
        />
      </div>
      <div className="col-md-6">
        <h2>{event.title}</h2>
        <p className="lead">
          Fecha: {event.date} | Hora: {event.date} | Lugar: {event.location}
        </p>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="quantity">
            Entradas
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            min="1"
            defaultValue="1"
          />
        </div>
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={() => alert("Resumen de compra")}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
