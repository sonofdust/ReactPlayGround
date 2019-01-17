class VisibleToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = { toggle: false };
  }

  toggleDetail() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetail}>
          {!this.state.toggle ? "Show details" : "Hide details"}
        </button>
        {this.state.toggle && (
          <p>Hey. These are some details you can now see!</p>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibleToggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// let toggle_show = false;
// const toggleDetail = () => {
//   toggle_show = !toggle_show;
//   renderJSX();
// };

// const renderJSX = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetail}>
//         {!toggle_show ? "Show details" : "Hide details"}
//       </button>
//       {toggle_show && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderJSX();
