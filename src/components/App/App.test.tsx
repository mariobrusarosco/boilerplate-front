import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { AppAsClass } from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state: any = null): ShallowWrapper => {
  console.log(state);
  return shallow(<AppAsClass {...props} />);
};

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (
  wrapper: ShallowWrapper,
  val: string
): ShallowWrapper => {
  return wrapper.find(`[data-testid="${val}"]`);
};

test("renders without any error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app");

  expect(component.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  let initialCounterState = wrapper.state("counter");

  expect(initialCounterState).toBe(0);
});
