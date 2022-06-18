import { mockedNavigator } from '../src/utils/test/test.util';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

jest.mock('redux-persist/integration/react', () => ({
  ...jest.requireActual('redux-persist/integration/react'),
  PersistGate: 'PersistGate',
}));
