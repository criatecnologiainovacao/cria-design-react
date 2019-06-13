import Markdown from '../../../../libs/markdown';

export default class Table extends Markdown {
  document() {
    return require(`./Table.md`);
  }
}