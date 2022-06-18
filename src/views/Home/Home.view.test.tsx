import React from 'react';
import renderer from 'react-test-renderer';
import { storeTest } from '../../utils/test/test.util';
import HomeView from './Home.view';

describe('HomeView component', () => {
  it('should render correctly', () => {
    const Wrapper = storeTest.wrapper;
    const tree = renderer
      .create(
        <Wrapper>
          <HomeView />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
