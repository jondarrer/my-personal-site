jest.mock('../i18n/resources.json', () => {
  return {
    en: { routes: {} },
  };
});

import resources from './../i18n/resources.json';

import getRoutes from './';

describe('utils/getRoutes', () => {
  beforeEach(() => {
    resources.en.routes = {};
  });
  it('should get no routes when none are available', () => {
    resources.en.routes = {};
    const routes = getRoutes();
    expect(routes).toStrictEqual([]);
  });
  it('should get the routes when they are available', () => {
    resources.en.routes = { '/': '/', '/abc': '/123' };
    const routes = getRoutes();
    expect(routes).toStrictEqual(['/', '/abc']);
  });
});
