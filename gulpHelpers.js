const fs = require('fs');
const path = require('path');

module.exports = {
  parseBrowserArgs: function (argv) {
    return (argv.browsers) ? argv.browsers.split(',') : [];
  },

  toCapitalCase: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  jsonifyHTML: function (str) {
    console.log(arguments);
    return str.replace(/\n/g, '')
        .replace(/<\//g, '<\\/')
        .replace(/\/>/g, '\\/>');
  },

  /*
   * Get source files from analytics directory adjacent to Prebid.js
   * Look for subdirectories that contain package.json with 'main' property
   * Returns an array of source files to be included in distribution build
   */
  getAnalyticsSources: function(directory) {
    const directoryContents = fs.readdirSync(directory);
    const packageFile = 'package.json';

    function isModuleDirectory(filePath) {
      try {
        const packageJsonPath = path.join(filePath, packageFile);
        if (fs.statSync(packageJsonPath).isFile()) {
          const module = require(packageJsonPath);
          return module && module.main;
        }
      }
      catch (error) {}
    }

    return directoryContents
      .filter(subdirectory => isModuleDirectory(path.join(directory, subdirectory)))
      .map(subdirectory => {
        const module = require(path.join(directory, subdirectory, packageFile));
        return path.join(directory, subdirectory, module.main);
      });
  }
};
