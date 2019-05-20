import Markdown from '../../../../libs/markdown';

export default class Tag extends Markdown {
  document() {
    return require(`./Tag.md`);
  }
}
