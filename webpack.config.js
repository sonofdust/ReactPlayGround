const path = require("path");

//Entry -> output
console.log();

module.exports = {
  entry: "./src/app.js",
  output: { path: path.join(__dirname, "public"), filename: "bundle.js" }
};
