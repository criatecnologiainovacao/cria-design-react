import Markdown from '../../../../libs/markdown';

import '../style.scss';

export default class CardQuantitativo extends Markdown {
  document() {
    return require(`./cardQuantitativo.md`);
  }
}
