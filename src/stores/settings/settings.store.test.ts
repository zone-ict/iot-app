import { Availability } from '../../hooks/useTranslator/useTranslator.hook';
import { settingsAction, settingsReducer, settingsStoreInitialState } from './settings.store';

describe('Settings initial state', () => {
  it('should be defined', () => {
    expect(settingsStoreInitialState).toBeDefined();
  });

  it('should have correct initial values', () => {
    expect(settingsStoreInitialState).toEqual({
      currentLanguage: 'en',
    });
  });
});

describe('Settings actions', () => {
  it('should have correct actions', () => {
    expect(settingsAction.changeLanguage).toBeDefined();
    expect(settingsAction.resetLanguage).toBeDefined();
  });
});

describe('Change Language action', () => {
  const language = Availability.id;
  const action = settingsAction.changeLanguage({ language });

  it('should have correct payload', () => {
    expect(action.payload).toEqual({ language });
  });

  it('should have correct type', () => {
    expect(action.type).toEqual('settings/changeLanguage');
  });

  it('should have correct effect to state', () => {
    expect(settingsReducer(settingsStoreInitialState, action)).toEqual({
      ...settingsStoreInitialState,
      currentLanguage: 'id',
    });
  });
});

describe('Reset Language action', () => {
  const action = settingsAction.resetLanguage();

  it('should have correct type', () => {
    expect(action.type).toEqual('settings/resetLanguage');
  });

  it('should have correct effect to state', () => {
    expect(settingsReducer(settingsStoreInitialState, action)).toEqual({
      ...settingsStoreInitialState,
      currentLanguage: 'en',
    });
  });
});
