import Markdown from '../../../../libs/markdown';

export default class Modal extends Markdown {
  document() {
    return require(`./Modal.md`);
  }
}
