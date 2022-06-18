/* eslint-disable @typescript-eslint/no-unsafe-call */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-test-renderer';
import { settingsAction } from '../../stores/settings/settings.store';
import { storeTest } from '../../utils/test/test.util';
import useTranslator, { Availability, Lang } from './useTranslator.hook';

const testLocale: Lang[] = [
  {
    en: 'Welcome',
    id: 'Selamat Datang',
  },
  {
    unique: 'Unique',
    en: 'Welcome',
    id: 'Selamat Datang Unik',
  },
];

function TestComponent() {
  const { translate } = useTranslator(testLocale);

  return (
    <div>
      <h1 data-testid="normal">{translate('Welcome')}</h1>
      <h2 data-testid="unique">{translate('Welcome', 'Unique')}</h2>
      <h3 data-testid="not-found">{translate('Not Found')}</h3>
    </div>
  );
}

describe('useTranslator hook', () => {
  it('should be able translate correctly', () => {
    const Wrapper = storeTest.wrapper;

    // Change language to ID
    storeTest.store.dispatch(settingsAction.changeLanguage({ language: Availability.id }));

    render(
      <Wrapper>
        <TestComponent />
      </Wrapper>,
    );

    expect(screen.getByText('Selamat Datang')).toBeInTheDocument();
    expect(screen.getByText('Selamat Datang Unik')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });

  it('should be able translate correctly when the language changes', async () => {
    const Wrapper = storeTest.wrapper;

    // Change language to ID
    await act(() => {
      storeTest.store.dispatch(settingsAction.changeLanguage({ language: Availability.id }));
    });

    const { rerender } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>,
    );

    expect(screen.getByText('Selamat Datang')).toBeInTheDocument();
    expect(screen.getByText('Selamat Datang Unik')).toBeInTheDocument();
    expect(screen.getByText('Not Found')).toBeInTheDocument();

    // Change language back to EN
    await act(() => {
      storeTest.store.dispatch(settingsAction.changeLanguage({ language: Availability.en }));
    });

    rerender(
      <Wrapper>
        <TestComponent />
      </Wrapper>,
    );

    expect(screen.getByTestId('normal')).toBeInTheDocument();
    expect(screen.getByTestId('unique')).toHaveTextContent('Welcome');
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
