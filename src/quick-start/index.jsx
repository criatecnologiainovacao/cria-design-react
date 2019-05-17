import Markdown from '../../libs/markdown';

export default class QuickStart extends Markdown {
  document() {
    return require(`./quick-start.md`);
  }
}
