import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr } from "../../specs/testUtils";

/**
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */

export const setup = (props = {}, state: any = null): ShallowWrapper => {
  const wrapper = shallow(<Congrats {...props} />);

  if (state) wrapper.setState(state);

  return wrapper;
};

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when 'sucess' prop is true", () => {
  const wrapper = setup();
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe;
});
