import Filters from "../components/filters.component";
import EventList from "../components/eventList.component";

function Event() {
  // Define la función que manejará los filtros
  const handleFilter = (filters: { eventType: string; eventDate: string }) => {
    console.log("Filtros aplicados:", filters);
    // Aquí puedes implementar la lógica para manejar los filtros
  };

  return (
    <div>
      <h1>Eventos</h1>
      {/* Pasa la función handleFilter como prop */}
      <Filters onFilter={handleFilter} />
      <EventList />
    </div>
  );
}

export default Event;
