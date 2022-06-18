import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import reduxLogger from 'redux-logger';
import apiService from '../../services/api/api.service';
import store, { devTools, middleware } from './store.app';

describe('Redux store', () => {
  it('should be defined', () => {
    expect(store).toBeDefined();
  });

  it('should have correct middleware', () => {
    const gDM = jest.fn(() => []) as unknown as CurriedGetDefaultMiddleware;
    expect(middleware(gDM)).toEqual([
      ...gDM(),
      ...(devTools ? [reduxLogger] : []),
      apiService.middleware,
    ]);
  });
});
