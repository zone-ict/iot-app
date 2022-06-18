import React from 'react';
import renderer from 'react-test-renderer';
import InputText from './InputText.atom';

describe('InputText component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<InputText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
