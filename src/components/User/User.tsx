import React from "react";
import { UserConsumer } from "../../contexts/userContext";

const User: React.FC = () => (
  <UserConsumer>
    {(user) => {
      return (
        <div>
          <h1>User</h1>
          <h2>First name: {user.firstName}</h2>
          <h3>Last name: {user.lastName}</h3>
          <button
            onClick={() =>
              user.setUser({
                firstName: "I'm the danger!",
                lastName: "I'm the one who knocks!",
              })
            }
          >
            Break bad
          </button>
        </div>
      );
    }}
  </UserConsumer>
);

export default User;
