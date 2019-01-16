const data = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
  };
  
  const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option && option.trim().length) {
      data.options.push(option);
      e.target.elements.option.value = "";
      renderJSX();
    }
    console.log(data.options);
  };
  const onRemoveAll = () => {
    data.options.length = 0;
    renderJSX();
  };
  
  const onRemoveItem = e => {
    e.preventDefault();
    console.log(e.target);
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * data.options.length);
    const option = data.options[randomNum];
    alert(option);
  };
  
  const appRoot = document.getElementById("app");
  
  const renderJSX = () => {
    const template = (
      <div>
        <h1>{data.title}</h1>
        {data.subtitle && data.subtitle.trim().length && <p>{data.subtitle}</p>}
        <p>
          {data.options && data.options.length
            ? "Here are your options"
            : "No Options"}
        </p>
        <button disabled={!data.options.length} onClick={onMakeDecision}>
          What should I do?
        </button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          {data.options.map((choice, index) => (
            <li key={index} onClick={onRemoveItem}>
              {choice}
            </li>
          ))}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  renderJSX();
  