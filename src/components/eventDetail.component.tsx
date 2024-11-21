import React, { useState, useEffect } from "react";

interface Event {
  id: string;
  category: string;
  date: string;
  img: string;
  title: string;
  description: string;
  location: string;
  ticketPrice: number;
}

interface EventDetailProps {
  eventId: string;
  onPurchase: (event: Event, quantity: number) => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId, onPurchase }) => {
  const events: Event[] = [
    {
      id: "1",
      category: "taller",
      date: "2025-01-15",
      img: "https://img.freepik.com/psd-premium/folleto-fiesta-evento-moda-abstracta-luna_788212-174.jpg",
      title: "Cocina Vegana Creativa y Saludable",
      description: "Un taller único sobre cocina vegana.",
      location: "Centro de convenciones",
      ticketPrice: 50,
    },
    {
      id: "2",
      category: "feria",
      date: "2025-02-20",
      img: "https://img.freepik.com/psd-gratis/plantilla-volante-festival-musica-electro_23-2148947808.jpg",
      title: "Emprende Fest",
      description: "Feria de emprendimiento para todos.",
      location: "Centro de convenciones",
      ticketPrice: 75,
    },
  ];

  // Llamada a useState siempre al inicio del componente, fuera de cualquier bloque condicional.
  const [quantity, setQuantity] = useState(1);
  const [event, setEvent] = useState<Event | null>(null);

  // Usamos useEffect para cargar el evento basado en el eventId al inicio.
  useEffect(() => {
    const foundEvent = events.find((e) => e.id === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [eventId]); // Se ejecuta cuando cambia el eventId.

  if (!event) {
    return <p>Evento no encontrado</p>; // Si no se encuentra el evento, mostrar este mensaje.
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(value);
  };

  return (
    <div className="row align-items-center bg-light">
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
          Fecha: {event.date} | Lugar: {event.location}
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
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={() => onPurchase(event, quantity)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
