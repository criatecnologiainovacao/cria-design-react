import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Color extends Markdown {
    document() {
        return require(`./color.md`);
    }
}