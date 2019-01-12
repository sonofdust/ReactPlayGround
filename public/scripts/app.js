"use strict";

var data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer."
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    data.title
  ),
  React.createElement(
    "p",
    null,
    data.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    ),
    React.createElement(
      "li",
      null,
      "Item three"
    )
  )
);

var user = {
  name: "Nicholas",
  age: 54,
  location: "Saltlake City"
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
