import Markdown from '../../../../libs/markdown';

export default class Button extends Markdown {
  document() {
    return require(`./Button.md`);
  }
}
