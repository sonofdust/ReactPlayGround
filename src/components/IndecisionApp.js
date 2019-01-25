import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

class IndecisionApp extends React.Component {
  state = {
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer.",
    options: []
  };

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
  }
  componentWillUnmount() {
    //    console.log("componentDidUpdate()");
    //    localStorage.setItem();
  }

  handelDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid vaue to add ";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handelDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
  };

  handlePick = () => {
    let randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex]);
  };

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

//IndecisionApp.defaultProps = {
//  title: "Indecision",
//  subtitle: "Put your life in the hands of a computer."
//};

export default IndecisionApp;
