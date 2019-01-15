const data = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer.",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{data.title}</h1>
    {data.subtitle && data.subtitle.trim().length && <p>{data.subtitle}</p>}
    <p>
      {data.options && data.options.length
        ? "Here are your options"
        : "No Options"}
    </p>
    <ol>
      {data.options.map(choice => {
        return <li key={choice}>{choice}</li>;
      })}
    </ol>
  </div>
);

let count = 0;
const add = () => {
  count++;
  renderCounterApp();
};
const subtract = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  {
    count = 0;
    renderCounterApp();
  }
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={subtract}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
