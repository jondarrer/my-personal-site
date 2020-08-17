const mockUseTranslation = jest.fn();
jest.mock('react-i18next', () => {
  return {
    ...jest.requireActual('react-i18next'),
    useTranslation: () => {
      return { t: mockUseTranslation };
    },
  };
});

jest.mock('../../contexts', () => {
  return {
    ...jest.requireActual('../../contexts'),
    useLanguage: () => {
      return { currentLanguage: 'en' };
    },
  };
});

// The component to test
import getTitle from './get-title';

describe('components/Meta/getTitle', () => {
  beforeEach(() => {
    mockUseTranslation.mockReset();
  });
  it('should get the default title', async () => {
    // Arrange
    const defaultPageTitle = 'Business';
    const domain = 'mock.com';

    mockUseTranslation.mockImplementation((id) => {
      switch (id) {
        case `meta:default-page-title`:
          return defaultPageTitle;
        case `nav-bar:domain`:
          return domain;
        default:
          break;
      }

      return null;
    });

    // Act
    const result = getTitle();

    expect(result).toStrictEqual(`${defaultPageTitle} - ${domain}`);
  });
  it('should get the overridden title', async () => {
    // Arrange
    const defaultPageTitle = 'Business';
    const pageTitle = 'My Page';
    const domain = 'mock.com';

    mockUseTranslation.mockImplementation((id) => {
      switch (id) {
        case `nav-bar:default-page-title`:
          return defaultPageTitle;
        case `nav-bar:domain`:
          return domain;
        default:
          break;
      }

      return null;
    });

    // Act
    const result = getTitle(pageTitle);

    expect(result).toStrictEqual(`${pageTitle} - ${domain}`);
  });
});
