import getLanguageForLocale from './';

describe('getLanguageForLocale', () => {
  it('should return ro for ro', () => {
    expect(getLanguageForLocale('ro')).toBe('ro');
  });
  it('should return en for en-gb', () => {
    expect(getLanguageForLocale('en-gb')).toBe('en');
  });
});
