"use strict";

var _HelloMessage = _interopRequireDefault(require("./components/HelloMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

ReactDOM.render( /*#__PURE__*/React.createElement(_HelloMessage["default"], {
  name: "Taylor"
}), document.getElementById('root'));