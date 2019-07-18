import Markdown from '../../../../libs/markdown';

export default class MessageBox extends Markdown {
    document() {
        return require(`./MessageBox.md`);
    }
}