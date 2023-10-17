import React from "react";

type CarCardProps = {
  car: {
    make: string;
    model: string;
    year: number;
  };
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div id="carCard">
      <h3>{car.make}</h3>
      <h4>{car.model}</h4>
      <p>{car.year}</p>
    </div>
  );
};

export default CarCard;
