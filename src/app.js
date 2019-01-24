import React from "react";
import ReactDom from "react-dom";

const template = React.createElement("p", {}, "Nicholas D. Roman");

ReactDom.render(template, document.getElementById("app"));
