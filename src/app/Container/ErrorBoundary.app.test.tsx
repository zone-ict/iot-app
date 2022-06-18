import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary.app';

describe('Error boundary component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <div>Test Content</div>
        </ErrorBoundary>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
