import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Cachorro extends Markdown {
  document() {
    return require(`./cachorro.md`);
  }
}
