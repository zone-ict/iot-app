import React from 'react';
import renderer from 'react-test-renderer';
import GlobalStyles from './GlobalStyles.app';

describe('GlobalStyles component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<GlobalStyles />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
