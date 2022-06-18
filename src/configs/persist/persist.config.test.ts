import localforage from 'localforage';
import persistConfig from './persist.config';

jest.mock('localforage', () => jest.fn());

describe('redux persist config object', () => {
  it('should have correct values', () => {
    expect(persistConfig).toEqual({
      version: 1,
      key: 'root',
      storage: localforage,
      whitelist: ['session'],
    });
  });
});
