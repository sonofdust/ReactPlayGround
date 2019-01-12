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

function getLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    "Location: ",
    location
  ) : undefined;
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
