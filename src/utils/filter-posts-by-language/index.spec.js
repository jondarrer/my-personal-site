// The component to test
import filterPostsByLanguage from './';

describe('utils/filterPostsByLanguage', () => {
  // Arrange
  const posts = {
    p1: { language: 'en' },
    p2: { language: 'ro' },
    p3: { language: 'en' },
    p4: { language: 'ro' },
  };
  it('should filter only the en language posts', async () => {
    // Arrange
    const language = 'en';

    // Act
    const result = filterPostsByLanguage(posts, language);

    // Assert
    expect(result).toStrictEqual({
      p1: { language: 'en' },
      p3: { language: 'en' },
    });
  });
  it('should filter to return no posts where none exist for the language', async () => {
    // Arrange
    const language = 'fr';

    // Act
    const result = filterPostsByLanguage(posts, language);

    // Assert
    expect(result).toStrictEqual({});
  });
  it('should filter to return no posts where none exist for any language', async () => {
    // Arrange
    const language = 'en';

    // Act
    const result = filterPostsByLanguage(null, language);

    // Assert
    expect(result).toBeNull();
  });
});
