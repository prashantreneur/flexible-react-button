"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: "".concat(props.colorCode),
      color: "".concat(props.textColor)
    },
    className: "btn ".concat(props.variant, " ").concat(props.size),
    type: props.type,
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
};

var _default = Button;
exports.default = _default;
Button.PropsTypes = {
  colorCode: _propTypes.default.string,
  textColor: _propTypes.default.string,
  variant: _propTypes.default.string,
  size: _propTypes.default.string,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};