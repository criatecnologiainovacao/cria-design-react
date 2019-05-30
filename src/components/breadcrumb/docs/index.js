import Markdown from '../../../../libs/markdown';

export default class Breadcrumb extends Markdown {
  document() {
    return require(`./Breadcrumb.md`);
  }
}
