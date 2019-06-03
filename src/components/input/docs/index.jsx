import Markdown from '../../../../libs/markdown';

export default class Input extends Markdown {
    document() {
        return require(`./Input.md`);
    }
}