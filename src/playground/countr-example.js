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
