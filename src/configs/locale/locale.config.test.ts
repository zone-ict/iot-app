import locale from './locale.config';

describe('locale configuration', () => {
  it('should have correct keys', () => {
    locale.forEach((translation) => {
      expect(Object.keys(translation)).toEqual(['en', 'id']);
    });
  });
});
