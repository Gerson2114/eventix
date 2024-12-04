import React from "react";
import Card from "../components/admin/card.component";
import Table from "../components/admin/table.component";

const Dashboard: React.FC = () => {
  const maintenanceData = [
    {
      ID: 1,
      Descripción: "Mantenimiento de servidor",
      Estado: "Completado",
      Fecha: "2024-11-20",
    },
    {
      ID: 2,
      Descripción: "Actualización de software",
      Estado: "En progreso",
      Fecha: "2024-11-21",
    },
    {
      ID: 3,
      Descripción: "Revisión de seguridad",
      Estado: "Pendiente",
      Fecha: "2024-11-22",
    },
  ];

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 content">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row g-3">
        <Card title="Total Usuarios" value={350} />
        <Card title="Mantenimientos Activos" value={45} />
        <Card title="Soporte Pendiente" value={7} />
      </div>

      <div className="mt-4">
        <h4>Últimos Mantenimientos</h4>
        <Table
          headers={["ID", "Descripción", "Estado", "Fecha"]}
          data={maintenanceData}
        />
      </div>
    </main>
  );
};

export default Dashboard;
