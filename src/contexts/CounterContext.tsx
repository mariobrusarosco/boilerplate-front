import { createContext, useState } from "react";

export interface CounterContextProps {
  counter: number;
  increment: () => void;
}

const initialState = 0;

const CounterContext = createContext<CounterContextProps | any>(undefined);
const { Provider, Consumer: CounterConsumer } = CounterContext;

const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter(counter + 1);

  return (
    <Provider
      value={{
        state: { counter },
        increment,
      }}
    >
      {children}
    </Provider>
  );
};

export { CounterProvider, CounterConsumer, CounterContext };
