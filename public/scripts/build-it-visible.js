"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visible = function (_React$Component) {
  _inherits(Visible, _React$Component);

  function Visible(props) {
    _classCallCheck(this, Visible);

    var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

    _this.toggleDetail = _this.toggleDetail.bind(_this);
    _this.state = { toggle: false };
    return _this;
  }

  _createClass(Visible, [{
    key: "toggleDetail",
    value: function toggleDetail() {
      this.setState(function (prevState) {
        return {
          toggle: !prevState
        };
      });
      console.log(this.state.toggle);
      alert('Nicholas D. Roman');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.toggleDetail },
          !this.state.toggle ? "Show details" : "Hide details"
        ),
        this.state.toggle && React.createElement(
          "p",
          null,
          "Hey. These are some details you can now see!"
        )
      );
    }
  }]);

  return Visible;
}(React.Component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById("app"));

// const appRoot = document.getElementById("app");

// let toggle_show = false;
// const toggleDetail = () => {
//   toggle_show = !toggle_show;
//   renderJSX();
// };

// const renderJSX = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetail}>
//         {!toggle_show ? "Show details" : "Hide details"}
//       </button>
//       {toggle_show && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderJSX();
