import React from 'react';
import renderer from 'react-test-renderer';
import DefaultTemplate from './Default.template';

describe('Default Template', () => {
  it('should render', () => {
    const tree = renderer.create(<DefaultTemplate>Test</DefaultTemplate>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
