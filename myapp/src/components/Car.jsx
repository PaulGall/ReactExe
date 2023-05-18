import CarDetails from "./CarDetails";

function Car() {
  let initialData = {
    name: "Audi",
    model: "TTS",
    year: "2010",
    color: "Giallo",
  };

  return <CarDetails initialData={initialData} />;
}
export default Car;
