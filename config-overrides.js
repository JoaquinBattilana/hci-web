const path = require('path');

const oneOfFileLoaders = config => config.module.rules.find(rule => rule.oneOf).oneOf;

const createLoaderMatcher = loader => rule =>
rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1; //eslint-disable-

const cssLoaderMatcher = createLoaderMatcher('css-loader');

const addCamelCaseToCSSModules = config => {
    const fileLoaders = oneOfFileLoaders(config);
  
    fileLoaders.forEach(loader => {
      if (loader.test && loader.use) {
        loader.use.forEach(use => {
          if (cssLoaderMatcher(use) && use.options.modules) {
            use.options.camelCase = true;
          }
        });
      }
    });
  };
  

module.exports = function override(config) {
    addCamelCaseToCSSModules(config);
    return config;
  }