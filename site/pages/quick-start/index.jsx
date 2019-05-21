import Markdown from '../../../libs/markdown';

export default class QuickStartDoc extends Markdown {
  document() {
    return require(`./quick-start.md`);
  }
}
