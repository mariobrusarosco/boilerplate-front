import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats, { CongratsProps } from "./Congrats";
import { findByTestAttr } from "../../specs/testUtils";

/**
 * @function setup
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */

export const setup = (
  props: CongratsProps,
  state: any = null
): ShallowWrapper => {
  const wrapper = shallow(<Congrats {...props} />);

  if (state) wrapper.setState(state);

  return wrapper;
};

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without error", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when 'sucess' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe;
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };

  checkProps(Congrats, expectedProps);
});
