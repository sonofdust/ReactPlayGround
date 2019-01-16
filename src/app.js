class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer.";
    const options = ["Thing-1", "Thing-2", "Thing-5"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert("Remove All");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option, idx) => (
          <Option option={option} key={idx} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div key={this.props.option}>{this.props.option}</div>;
  }
}

class AddOption extends React.Component {
  handleSumit(e) {
    e.preventDefault();
    //    options.push(e.target.elements.input.value);
    //console.log(this.options);
    const option = e.target.elements.input.value;
    if (option.trim().length) {
      alert(option.trim());
      e.target.elements.input.value = "";
    }
    //    console.log(e.target.elements.input.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <input name="input" defaultValue="Enter Text" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
