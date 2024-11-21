import { useParams } from "react-router-dom";
import { useState } from "react";
import EventDetail from "../components/eventDetail.component";
import OrderSummary from "../components/orderSummary.component";

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

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = id || "";

  const [orderDetails, setOrderDetails] = useState<{
    event: Event | null;
    quantity: number;
    total: number;
  }>({
    event: null,
    quantity: 1,
    total: 0,
  });

  const handlePurchase = (event: Event, quantity: number) => {
    setOrderDetails({ event, quantity, total: quantity * event.ticketPrice });
  };

  const handleBackToSelection = () => {
    setOrderDetails({ event: null, quantity: 1, total: 0 });
  };

  return (
    <section className="event-details bg-light" style={{ padding: "20px" }}>
      <div className="container">
        <h1>Detalles del Evento</h1>
        {orderDetails.event ? (
          <OrderSummary
            details={orderDetails}
            onBackToSelection={handleBackToSelection}
          />
        ) : (
          <EventDetail eventId={eventId} onPurchase={handlePurchase} />
        )}
      </div>
    </section>
  );
};

export default EventDetailPage;
