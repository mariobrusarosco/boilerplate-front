import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { AppAsClass } from "./App";
import { findByTestAttr } from "../../specs/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state: any = null): ShallowWrapper => {
  const wrapper = shallow(<AppAsClass {...props} />);

  if (state) wrapper.setState(state);

  return wrapper;
};

test("renders without any error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app");

  expect(component.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");

  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 7;
  const wrapper = setup({}, { counter });
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");

  const counterDisplay = findByTestAttr(wrapper, "counter-display");

  expect(counterDisplay.text()).toContain(counter + 1);
});

test("clicking button decrements counter displays", () => {
  const counter = 8;
  const wrapper = setup({}, { counter });
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");

  const counterDisplay = findByTestAttr(wrapper, "counter-display");

  expect(counterDisplay.text()).toContain(counter - 1);
});
