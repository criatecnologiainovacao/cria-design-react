import Markdown from '../../../libs/markdown';

export default class QuickStart extends Markdown {
  document() {
    return require(`site/pages/quick-start/quick-start.md`);
  }
}
