"use strict";

var data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    data.title
  ),
  data.subtitle && data.subtitle.trim().length && React.createElement(
    "p",
    null,
    data.subtitle
  ),
  React.createElement(
    "p",
    null,
    data.options && data.options.length ? "Here are your options" : "No Options"
  ),
  React.createElement(
    "ol",
    null,
    data.options.map(function (choice) {
      return React.createElement(
        "li",
        { key: choice },
        choice
      );
    })
  )
);

var count = 0;
var add = function add() {
  count++;
  renderCounterApp();
};
var subtract = function subtract() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  {
    count = 0;
    renderCounterApp();
  }
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: add },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: subtract },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
