import Markdown from '../../libs/markdown';

import './style.scss';

export default class Cachorro extends Markdown {
  document(locale) {
    return require(`./cachorro.md`);
  }
}
