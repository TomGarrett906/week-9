import CarCard from "./CarCard";

type CarListProps = {
  cars: {
    id: number;
    make: string;
    model: string;
    year: number;
  }[];
};

function CarList({ cars }: CarListProps): JSX.Element {
  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
}

export default CarList;
