import React from 'react';
import HomeRoute from './Home.route';
import HomeView from './Home.view';

describe('Home Page route', () => {
  it('should have correct path', () => {
    expect(HomeRoute.path).toEqual('/');
  });

  it('should have correct element', () => {
    expect(HomeRoute.element).toEqual(<HomeView />);
  });
});
