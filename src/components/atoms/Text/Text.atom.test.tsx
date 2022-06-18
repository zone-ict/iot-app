import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text.atom';

describe('Text component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text>Text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text.HeadingOne component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text.HeadingOne>Text</Text.HeadingOne>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text.HeadingTwo component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text.HeadingTwo>Text</Text.HeadingTwo>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text.HeadingThree component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text.HeadingThree>Text</Text.HeadingThree>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text.HeadingFour component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text.HeadingFour>Text</Text.HeadingFour>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text.HeadingFive component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Text.HeadingFive>Text</Text.HeadingFive>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
