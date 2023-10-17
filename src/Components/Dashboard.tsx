import React from "react";
import CarList from "./CarList";

const Dashboard: React.FC = () => {
  const cars = [
    {
      id: 1,
      make: "Ferrari",
      model: "Enzo",
      year: 2010,
    },
    {
      id: 2,
      make: "Lamborghini",
      model: "Diablo",
      year: 2000,
    },
    {
      id: 3,
      make: "Porsche",
      model: "911",
      year: 2022,
    },
    {
      id: 4,
      make: "Audi",
      model: "A8",
      year: 2021,
    }
  ];

  return (
    <div>
      <h2>Car Inventory</h2>
      <CarList cars={cars} />
    </div>
  );
};

export default Dashboard;
