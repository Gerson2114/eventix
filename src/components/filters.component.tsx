import { useState } from "react";

// Define los tipos para los filtros
interface FiltersProps {
  onFilter: (filters: { eventType: string; eventDate: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [eventType, setEventType] = useState<string>("all");
  const [eventDate, setEventDate] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Llama a la función onFilter con los filtros seleccionados
    onFilter({ eventType, eventDate });
  };

  return (
    <section className="filters">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-3">
              <label htmlFor="eventType">Tipo de Evento:</label>
              <select
                className="form-select"
                id="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="concierto">Concierto</option>
                <option value="conferencia">Conferencia</option>
                <option value="taller">Taller</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="eventDate">Fecha:</label>
              <input
                type="date"
                className="form-control"
                id="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Filtrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filters;
