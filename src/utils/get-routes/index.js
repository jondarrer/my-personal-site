import resources from '../i18n/resources.json';

/**
 * Gets the routes from src/utils/i18n/resources.json
 *
 * @return {Array<string>} An array routes, e.g. ['/', '/abc', etc.]
 */
const getRoutes = () => {
  const {
    en: { routes: enRoutes },
  } = resources;

  return Object.keys(enRoutes);
};

export default getRoutes;
