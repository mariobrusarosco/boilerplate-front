import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

const Counter: React.FC = () => {
  const counter = useContext(CounterContext);
  const { state, increment } = counter;

  return (
    <>
      <p>Counter: {state.counter}</p>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default Counter;
