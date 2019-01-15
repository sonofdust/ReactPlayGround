const appRoot = document.getElementById("app");

let toggle_show = false;
const toggleDetail = () => {
  toggle_show = !toggle_show;
  renderJSX();
};

const renderJSX = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetail}>
        {!toggle_show ? "Show details" : "Hide details"}
      </button>
      {toggle_show && <p>Hey. These are some details you can now see!</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderJSX();
