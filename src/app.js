var data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer."
};

var template = (
  <div>
    <h1>{data.title}</h1>
    <p>{data.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

var user = {
  name: "Nicholas",
  age: 54,
  location: "Saltlake City"
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
