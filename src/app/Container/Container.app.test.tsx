import React from 'react';
import renderer from 'react-test-renderer';
import Container from './Container.app';

describe('Container component', () => {
  it('should render correctly', () => {
    jest.mock('react-redux', () => ({
      Provider: 'Provider',
    }));

    const tree = renderer.create(<Container />);

    expect(tree).toMatchSnapshot();
  });
});
