import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without any error", () => {
  shallow(<App />);
});

test("renders increment button", () => {});
