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
  state: {
    counter: number;
  };

  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <main data-testid="app">
        <h1>App Component</h1>

        <div data-testid="counter-wrapper">
          <p data-testid="counter-display">
            Counter: <span>{this.state.counter}</span>
          </p>
          <button data-testid="decrement-button" onClick={this.decrement}>
            decrement
          </button>
          <button data-testid="increment-button" onClick={this.increment}>
            increment
          </button>
        </div>
      </main>
    );
  }
}

export default hot(App);
