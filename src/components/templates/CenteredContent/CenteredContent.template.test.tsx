import React from 'react';
import renderer from 'react-test-renderer';
import CenteredContent from './CenteredContent.template';

describe('Centered content template', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CenteredContent>Test</CenteredContent>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
