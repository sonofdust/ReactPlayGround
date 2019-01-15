"use strict";

var data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option && option.trim().length) {
    data.options.push(option);
    e.target.elements.option.value = "";
    renderJSX();
  }
  console.log(data.options);
};
var onRemoveAll = function onRemoveAll() {
  data.options.length = 0;
  renderJSX();
};

var onRemoveItem = function onRemoveItem(e) {
  e.preventDefault();
  console.log(e.target);
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * data.options.length);
  var option = data.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var renderJSX = function renderJSX() {
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
      "button",
      { disabled: !data.options.length, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      data.options.map(function (choice, index) {
        return React.createElement(
          "li",
          { key: index, onClick: onRemoveItem },
          choice
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderJSX();
