// The component to test
import orderPostsByDate from './';

describe('utils/orderPostsByDate', () => {
  // Arrange
  const posts = {
    p1: { datePosted: '2020-08-03' },
    p2: { datePosted: '2020-08-01' },
    p3: { datePosted: '2020-08-04' },
    p4: { datePosted: '2020-08-02' },
  };
  it('should return the posts in default (descending) order', async () => {
    // Arrange & Act
    const result = orderPostsByDate(posts);

    // Assert
    expect(result).toStrictEqual([
      { datePosted: '2020-08-04' },
      { datePosted: '2020-08-03' },
      { datePosted: '2020-08-02' },
      { datePosted: '2020-08-01' },
    ]);
  });
  it('should return the posts in descending order', async () => {
    // Arrange
    const direction = 'desc';

    // Act
    const result = orderPostsByDate(posts, direction);

    // Assert
    expect(result).toStrictEqual([
      { datePosted: '2020-08-04' },
      { datePosted: '2020-08-03' },
      { datePosted: '2020-08-02' },
      { datePosted: '2020-08-01' },
    ]);
  });
  it('should return the posts in ascending order', async () => {
    // Arrange
    const direction = 'asc';

    // Act
    const result = orderPostsByDate(posts, direction);

    // Assert
    expect(result).toStrictEqual([
      { datePosted: '2020-08-01' },
      { datePosted: '2020-08-02' },
      { datePosted: '2020-08-03' },
      { datePosted: '2020-08-04' },
    ]);
  });
  it('should filter to return no posts where none exist for the language', async () => {
    // Arrange
    const direction = 'unknown';

    // Act & Assert
    expect(() => orderPostsByDate(posts, direction)).toThrow(
      new Error(
        `Unexpected direction "${direction}". Please provide either "asc", "desc" or allow the default.`
      )
    );
  });
  it('should return null when null posts are provided', async () => {
    // Arrange & Act
    const result = orderPostsByDate(null);

    // Assert
    expect(result).toBeNull();
  });
  it('should return an empty array when no posts are provided', async () => {
    // Arrange & Act
    const result = orderPostsByDate({});

    // Assert
    expect(result).toStrictEqual([]);
  });
});
