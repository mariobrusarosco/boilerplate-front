import { createContext, useState } from "react";

export interface UserProps {
  firstName: string;
  lastName: string;
  setUser: any;
}

const initialState: UserProps = {
  firstName: "Walter",
  lastName: "White",
  setUser: null,
};
// USerContext has two props: Consumer and Provider
const { Provider, Consumer: UserConsumer } = createContext(initialState);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <Provider
      value={{
        ...user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export { UserProvider, UserConsumer };
