import { generateRandNumFrom1to10, generateRandNumFrom1to100, getDefaultLang } from './helper.util';

describe('generateRandNumFrom1to10', () => {
  it('generate number between 1-10', () => {
    const randNumber = generateRandNumFrom1to10();
    expect(randNumber).toBeGreaterThanOrEqual(1);
    expect(randNumber).toBeLessThanOrEqual(10);
  });
});

describe('generateRandNumFrom1to100', () => {
  it('generate number between 1-100', () => {
    const randNumber = generateRandNumFrom1to100();
    expect(randNumber).toBeGreaterThanOrEqual(1);
    expect(randNumber).toBeLessThanOrEqual(100);
  });
});

describe('getDefaultLang', () => {
  const spy = jest.spyOn(navigator, 'language', 'get');

  it('should return en', () => {
    spy.mockReturnValue('en-US');

    const lang = getDefaultLang();

    expect(lang).toEqual('en');
  });

  it('should return id', () => {
    spy.mockReturnValue('id-ID');

    const lang = getDefaultLang();

    expect(lang).toEqual('id');
  });

  it('should return en when the language is not supported', () => {
    // TODO: Change this if we support French
    spy.mockReturnValue('fr-FR');

    const lang = getDefaultLang();

    expect(lang).toEqual('en');
  });

  it('should return en when navigator.language returns empty string', () => {
    spy.mockReturnValue('');

    const lang = getDefaultLang();

    expect(lang).toEqual('en');
  });
});
