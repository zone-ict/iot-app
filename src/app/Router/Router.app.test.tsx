import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { storeTest } from '../../utils/test/test.util';
import RouterApp from './Router.app';

describe('Router Component', () => {
  it('should render correctly', () => {
    const Wrapper = storeTest.wrapper;

    const tree = renderer
      .create(
        <BrowserRouter>
          <Wrapper>
            <RouterApp />
          </Wrapper>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
