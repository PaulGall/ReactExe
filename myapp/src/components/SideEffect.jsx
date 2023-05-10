import { useEffect } from "react";

const SideEffect = (props) => {
  useEffect(() => props.change, [props.counter]);

  return (
    <>
      <h2>Count: {props.counter}</h2>
      <button onClick={props.increase}>Incrementa</button>
      <button onClick={props.decrease}>Decrementa</button>
    </>
  );
};

export default SideEffect;
