class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handelDeleteOption = this.handelDeleteOption.bind(this);
    this.state = {
      title: props.title,
      subtitle: props.subtitle,
      options: []
    };
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.lehgth !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    //    console.log(prevState);
  }
  componentWillUnmount() {
    //    console.log("componentDidUpdate()");
    //    localStorage.setItem();
  }

  handelDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid vaue to add ";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handelDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
    //    console.log(this.state.options);
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
          handelDeleteOption={this.handelDeleteOption}
          handelDeleteOptions={this.handelDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer."
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = { title: "Indecision" };

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button
        disabled={props.options.length === 0}
        onClick={props.handelDeleteOptions}
      >
        Remove All
      </button>
      {props.options.length === 0 && (
        <p>Please add an options to get started.</p>
      )}
      {props.options.map((option, idx) => (
        <Option
          handelDeleteOption={props.handelDeleteOption}
          option={option}
          key={idx}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div key={props.option}>
      {props.option}
      <button onClick={e => props.handelDeleteOption(props.option)}>Del</button>
    </div>
  );
};

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
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
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
