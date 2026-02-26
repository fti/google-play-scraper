import { constants } from './constants.js';

function categories () {
  return Promise.resolve(Object.values(constants.category));
}

export default categories;
