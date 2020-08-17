const getLanguageForLocale = (locale) => {
  return locale.split('-')[0];
};

export default getLanguageForLocale;
