import React from "react";

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

interface OrderSummaryProps {
  details: {
    event: Event;
    quantity: number;
    total: number;
  };
  onBackToSelection: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  details,
  onBackToSelection,
}) => {
  const { event, quantity, total } = details;

  return (
    <div
      id="order-summary"
      className="row justify-content-center mt-5 bg-light"
    >
      <div className="col-md-8">
        <div className="card shadow-lg p-4 rounded-lg">
          <h3 className="text-center text-primary mb-4">Resumen de Pedido</h3>
          <div className="row">
            <div className="col-md-6">
              <h5>Detalles del Evento</h5>
              <ul>
                <li>
                  <strong>Evento:</strong> {event.title}
                </li>
                <li>
                  <strong>Fecha:</strong> {event.date}
                </li>
                <li>
                  <strong>Lugar:</strong> {event.location}
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <h5>Detalles de la Compra</h5>
              <p>
                <strong>Cantidad:</strong> {quantity}
              </p>
              <p>
                <strong>Total:</strong> ${total.toFixed(2)}
              </p>
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => alert("Proceder al pago")}
              >
                Proceder al Pago
              </button>
              <button
                className="btn btn-outline-secondary btn-lg w-100 mt-2"
                onClick={onBackToSelection}
              >
                Editar Entradas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
