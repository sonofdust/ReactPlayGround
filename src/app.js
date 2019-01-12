var data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ["One", "Two"]
};

var template = (
  <div>
    <h1>{data.title}</h1>
    {data.subtitle && data.subtitle.trim().length && <p>{data.subtitle}</p>}
    <p>
      {data.options && data.options.length
        ? "Here are your options"
        : "No Options"}
    </p>
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

function getLocation(location) {
  return location ? <p>Location: {location}</p> : undefined;
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
