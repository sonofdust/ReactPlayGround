import React from "react";
import Option from "./Option";

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

export default Options;
