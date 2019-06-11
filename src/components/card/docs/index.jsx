import Markdown from '../../../../libs/markdown';

export default class Card extends Markdown {
    document() {
        return require(`./Card.md`);
    }
}
