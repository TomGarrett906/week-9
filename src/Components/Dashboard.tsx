import React, { useState, useEffect } from "react";
import CarList from "./CarList";


interface Car {
  id: number;
  name: string;
  year: number;
}

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function getCars() {
      const res = await fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars");
      if (res.ok) {
        const data: Car[] = await res.json();
        setCars(data);
      } else {
        console.error("Bad Request");
      }
    }

    getCars();
  }, []); 

  return (
    <div>
      <h1>Car Inventory</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Dashboard;