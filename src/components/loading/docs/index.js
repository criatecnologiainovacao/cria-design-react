import Markdown from '../../../../libs/markdown';

export default class Loading extends Markdown {
    document() {
        return require(`./Loading.md`);
    }
}