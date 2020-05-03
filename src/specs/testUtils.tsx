import { ShallowWrapper } from "enzyme";
// import checkPropTypes from "check-prop-types";

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (
  wrapper: ShallowWrapper,
  val: string
): ShallowWrapper => {
  return wrapper.find(`[data-testid="${val}"]`);
};

// export const checkProps = (
//   Component: React.FunctionComponent,
//   conformingProps: any
// ) => {
//   const propError = checkPropTypes(
//     Component.propTypes,
//     conformingProps,
//     "prop",
//     Component.name
//   );

//   expect(propError).toBeUndefined();
// };
