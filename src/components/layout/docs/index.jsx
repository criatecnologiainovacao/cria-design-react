import Markdown from '../../../../libs/markdown';

export default class Layout extends Markdown {
  document() {
    return require(`./Layout.md`);
  }
}
