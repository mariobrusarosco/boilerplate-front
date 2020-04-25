import { hot } from "react-hot-loader/root";
import { useState } from "react";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);

  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <main data-testid="app">
      <h1>App Component</h1>

      <div data-testid="counter-wrapper">
        <p>
          Counter: <span>{counter}</span>
        </p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </main>
  );
};

export class AppAsClass extends React.Component {
  constructor(props: any) {
    super(props);
    console.log("App Component", APPLICATION);
  }

  // const [counter, setCounter] = useState(0);

  // const decrement = () => setCounter(counter - 1);
  // const increment = () => setCounter(counter + 1);

  render() {
    return (
      <main data-testid="app">
        <h1>App Component</h1>

        {/* <div data-testid="counter-wrapper">
          <p>
            Counter: <span>{counter}</span>
          </p>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
        </div> */}
      </main>
    );
  }
}

export default hot(App);
