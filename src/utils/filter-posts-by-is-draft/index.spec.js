// The component to test
import filterPostsByIsDraft from './';

describe('utils/filterPostsByIsDraft', () => {
  // Arrange
  const posts = {
    p1: { isDraft: false },
    p2: { isDraft: true },
  };

  it('should filter only the non-draft posts', async () => {
    // Act
    const result = filterPostsByIsDraft(posts, true);

    // Assert
    expect(result).toStrictEqual({
      p2: { isDraft: true },
    });
  });

  it('should filter only the draft posts', async () => {
    // Act
    const result = filterPostsByIsDraft(posts, false);

    // Assert
    expect(result).toStrictEqual({
      p1: { isDraft: false },
    });
  });

  it('should filter only the draft posts by default', async () => {
    // Act
    const result = filterPostsByIsDraft(posts);

    // Assert
    expect(result).toStrictEqual({
      p1: { isDraft: false },
    });
  });
});
