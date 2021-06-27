import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CounterProvider, CounterContext } from "../../contexts/CounterContext";
import Counter from "./Counter";

describe("Components | Counter", () => {
  it("renders Counter's display", () => {
    const { getByText } = render(
      <CounterContext.Provider
        value={{
          state: { counter: 4 },
        }}
      >
        <Counter />
      </CounterContext.Provider>
    );

    const counterDisplay = getByText("Counter: 4");

    expect(counterDisplay).toBeDefined();
  });
});
