import { hot } from "react-hot-loader/root";
import { useState } from "react";
import { UserProvider, UserConsumer } from "../../contexts/userContext";
import User from "../User/User";

const App: React.FC = () => {
  console.log("App Component", APPLICATION);

  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  return (
    <main>
      <h1>App Component</h1>

      <UserProvider>
        <UserConsumer>{(user) => user && <User />}</UserConsumer>
      </UserProvider>

      <div>
        <p>
          Counter: <span>{counter}</span>
        </p>
        <button onClick={increment}>increment</button>
      </div>
    </main>
  );
};

export default hot(App);
