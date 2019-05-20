'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

require('core-js/modules/es6.object.define-property');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _reactTransitionGroup = require('react-transition-group');

var _ = require('../');

var noneFun = function noneFun() {
  return undefined;
};

var Transition =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2['default'])(Transition, _Component);

    function Transition() {
      (0, _classCallCheck2['default'])(this, Transition);
      return (0, _possibleConstructorReturn2['default'])(this, (0, _getPrototypeOf2['default'])(Transition)
        .apply(this, arguments));
    }

    (0, _createClass2['default'])(Transition, [
      {
        key: 'render',
        value: function render() {
          var _this = this;

          var _this$props = this.props,
            inProp = _this$props['in'],
            _onEnter = _this$props.onEnter,
            _onEntering = _this$props.onEntering,
            _onEntered = _this$props.onEntered,
            _onExit = _this$props.onExit,
            _onExiting = _this$props.onExiting,
            _onExited = _this$props.onExited,
            _addEndListener = _this$props.addEndListener,
            unmountOnExit = _this$props.unmountOnExit,
            appear = _this$props.appear,
            duration = _this$props.duration,
            mountOnEnter = _this$props.mountOnEnter,
            transitionClass = _this$props.transitionClass;
          return _react['default'].createElement(_reactTransitionGroup.Transition, {
            onEnter: function onEnter() {
              return _onEnter();
            },
            onEntering: function onEntering() {
              return _onEntering();
            },
            onEntered: function onEntered() {
              return _onEntered();
            },
            onExit: function onExit() {
              return _onExit();
            },
            onExiting: function onExiting() {
              return _onExiting();
            },
            onExited: function onExited() {
              return _onExited();
            },
            addEndListener: function addEndListener() {
              return _addEndListener();
            },
            'in': inProp,
            mountOnEnter: mountOnEnter,
            unmountOnExit: unmountOnExit,
            appear: appear,
            timeout: duration
          }, function (state) {
            return _react['default'].createElement(_.View, {
              className: transitionClass[state]
            }, _this.props.children);
          });
        }
      }
    ]);
    return Transition;
  }(_react.Component);

Transition.defaultProps = {
  onEnter: noneFun,
  onEntering: noneFun,
  onEntered: noneFun,
  onExit: noneFun,
  onExiting: noneFun,
  onExited: noneFun,
  addEndListener: noneFun,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: true,
  duration: 0
};
var _default = Transition;
exports['default'] = _default;