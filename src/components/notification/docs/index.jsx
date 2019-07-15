import Markdown from '../../../../libs/markdown';

export default class Notification extends Markdown {
    document() {
        return require(`./Notification.md`);
    }
}