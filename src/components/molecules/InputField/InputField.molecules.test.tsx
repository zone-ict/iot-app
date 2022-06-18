import React from 'react';
import renderer from 'react-test-renderer';
import InputField from './InputField.molecule';

describe('Input field component', () => {
  it('should be able to render correctly without any props', () => {
    const tree = renderer.create(<InputField />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render correctly when passed label and error props', () => {
    const tree = renderer.create(<InputField label="test" error="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render correctly with only label props passed', () => {
    const tree = renderer.create(<InputField label="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render with only error prop passed', () => {
    const tree = renderer.create(<InputField error="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
