import { useEffect, useRef } from "react";

function CarDetails(props) {
  const carDetails = useRef("");
  const carName = useRef("");
  const carModel = useRef("");
  const carYear = useRef("");
  const carColor = useRef("");

  const onSubmitDetails = (event) => {
    event.preventDefault();
    console.log([
      carName.current.value,
      carModel.current.value,
      carYear.current.value,
      carColor.current.value,
    ]);
    carName.current.value = "";
    carModel.current.value = "";
    carYear.current.value = "";
    carColor.current.value = "";
  };

  useEffect(() => {
    carDetails.current.reset();
  }, [props.initialData]);

  return (
    <>
      <form ref={carDetails} onSubmit={onSubmitDetails}>
        <input
          type="text"
          name="name"
          onChange={(e) => e.target.value}
          defaultValue={props.initialData.name}
        />
        <input
          type="text"
          name="model"
          onChange={(e) => e.target.value}
          defaultValue={props.initialData.model}
        />
        <input
          type="text"
          name="year"
          onChange={(e) => e.target.value}
          defaultValue={props.initialData.year}
        />
        <input
          type="text"
          name="color"
          onChange={(e) => e.target.value}
          defaultValue={props.initialData.color}
        />
        <button type="submit">Load</button>
      </form>
    </>
  );
}

export default CarDetails;
