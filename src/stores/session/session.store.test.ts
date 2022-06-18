import { sessionAction, sessionReducer, sessionStoreInitialState } from './session.store';

describe('Session initial state', () => {
  it('should be defined', () => {
    expect(sessionStoreInitialState).toBeDefined();
  });

  it('should have correct initial values', () => {
    expect(sessionStoreInitialState).toEqual({
      isLoggedIn: false,
      token: '',
    });
  });
});

describe('Session actions', () => {
  it('should have correct actions', () => {
    expect(sessionAction.changeToken).toBeDefined();
    expect(sessionAction.login).toBeDefined();
    expect(sessionAction.logout).toBeDefined();
  });
});

describe('Change Token action', () => {
  const token = 'token';
  const action = sessionAction.changeToken({ token });

  it('should have correct payload', () => {
    expect(action.payload).toEqual({ token });
  });

  it('should have correct type', () => {
    expect(action.type).toEqual('session/changeToken');
  });

  it('should have correct effect to state', () => {
    expect(sessionReducer(sessionStoreInitialState, action)).toEqual({
      ...sessionStoreInitialState,
      token: 'token',
    });
  });
});

describe('Login action', () => {
  const token = 'token';
  const action = sessionAction.login({ token });

  it('should have correct payload', () => {
    expect(action.payload).toEqual({ token });
  });

  it('should have correct type', () => {
    expect(action.type).toEqual('session/login');
  });

  it('should have correct effect to state', () => {
    expect(sessionReducer(sessionStoreInitialState, action)).toEqual({
      ...sessionStoreInitialState,
      isLoggedIn: true,
      token: 'token',
    });
  });
});

describe('Logout action', () => {
  const action = sessionAction.logout();

  it('should have correct type', () => {
    expect(action.type).toEqual('session/logout');
  });

  it('should have correct effect to state', () => {
    expect(sessionReducer(sessionStoreInitialState, action)).toEqual({
      ...sessionStoreInitialState,
      isLoggedIn: false,
      token: '',
    });
  });
});
