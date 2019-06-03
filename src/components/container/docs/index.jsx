import Markdown from '../../../../libs/markdown';

export default class Container extends Markdown {
  document() {
    return require(`./Container.md`);
  }
}
