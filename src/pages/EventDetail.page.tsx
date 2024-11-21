import { useParams } from "react-router-dom";
import EventDetail from "../components/eventDetail.component";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Aseguramos que id siempre sea un string
  const eventId = id ?? "";

  return (
    <section
      className="event-details-eventodetails bg-light"
      style={{ padding: "0px" }}
    >
      <div className="container bg-light">
        <h1>Detalles del Evento</h1>
        <EventDetail eventId={eventId} />
      </div>
    </section>
  );
};

export default EventDetailPage;
