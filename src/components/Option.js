import React from "react";

const Option = props => {
  return (
    <div key={props.option}>
      {props.option}
      <button onClick={e => props.handelDeleteOption(props.option)}>Del</button>
    </div>
  );
};

export default Option;
