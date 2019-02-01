import React from "react";

const Option = props => (
  <div className="option" key={props.count}>
    <p key={props.count} className="option__text">
      {props.count}. {props.option}
    </p>

    <button
      className="button button--link"
      onClick={e => props.handelDeleteOption(props.option)}
    >
      Del
    </button>
  </div>
);

export default Option;
