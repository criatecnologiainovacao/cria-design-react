import Markdown from '../../../../libs/markdown';

export default class Form extends Markdown {
    document() {
        return require(`./Form.md`);
    }
}