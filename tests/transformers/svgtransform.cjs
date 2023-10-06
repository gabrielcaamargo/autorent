/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('node:path');
module.exports = {
  process(sourcetext, sourcepath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcepath))};`,
    };
  },
  getcachekey() {
    return 'svgtransform';
  }
};
