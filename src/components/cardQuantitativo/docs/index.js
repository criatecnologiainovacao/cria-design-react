import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import Markdown from '../../../../libs/markdown';

import '../style.scss';

var CardQuantitativo = function (_Markdown) {
  _inherits(CardQuantitativo, _Markdown);

  function CardQuantitativo() {
    _classCallCheck(this, CardQuantitativo);

    return _possibleConstructorReturn(this, _Markdown.apply(this, arguments));
  }

  CardQuantitativo.prototype.document = function document() {
    return require('./cardQuantitativo.md');
  };

  return CardQuantitativo;
}(Markdown);

export default CardQuantitativo;