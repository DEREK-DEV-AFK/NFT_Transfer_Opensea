// To help typescript find the type

import { mainTokens } from './main/index';
import { rinkebyTokens } from './rinkeby/index';
import { goerliTokens } from './goerli/index';

export const tokens = {
  goerli: goerliTokens,
  rinkeby: rinkebyTokens,
  main: mainTokens,
};
