import TestRenderer from 'react-test-renderer';

export const checkSnapshot = (component, options) => {
  const tree = TestRenderer.create(component, options).toJSON();
  return expect(tree).toMatchSnapshot();
};
