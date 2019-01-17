class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer.",
      options: []
    };
  }
  handelDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid vaue to add ";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handlePick() {
    let randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex]);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handelDeleteOptions={this.handelDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What Should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.options.length === 0}
          onClick={this.props.handelDeleteOptions}
        >
          Remove All
        </button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    //    alert(error);
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input name="option" defaultValue="Enter Text" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
