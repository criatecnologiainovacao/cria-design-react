import Markdown from '../../../../libs/markdown';

export default class Tooltip extends Markdown {
    document() {
        return require(`./Tooltip.md`);
    }
}