// To help typescript find the type

import { mainSchemas } from './main/index';
import { rinkebySchemas } from './rinkeby/index';
import { goerliSchemas } from './goerli/index';

export const schemas = {
  goerli: goerliSchemas,
  rinkeby: rinkebySchemas,
  main: mainSchemas,
};
