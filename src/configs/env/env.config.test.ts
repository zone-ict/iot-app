import env from './env.config';

describe('env config', () => {
  it('should have a apiBaseUrl', () => {
    expect(env.apiBaseUrl).toBeDefined();
  });
});
