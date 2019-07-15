import Markdown from '../../../../libs/markdown';

export default class Popover extends Markdown {
    document() {
        return require(`./Popover.md`);
    }
}