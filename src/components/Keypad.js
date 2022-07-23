// import { useState } from "react";
import "../App.css";

const Keypad = (props) => {
  return (
    <div className="h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-8">
      <Key data={props.data} setData={props.setData} keys={props.keys} />
    </div>
  );
};

export default Keypad;

const Key = (props) => {
  const calculatorButtons = props.keys.filter((key) => key.calcBtn);
  console.log(calculatorButtons);

  const calcBtns = [];
  props.keys.forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => props.setData(props.data + e.target.value)}
        value={item.label}
        key={item.label}
        className={`px-8 py-3 rounded-md ${
          item.color === "standard"
            ? "standardButton"
            : item.color === "mark"
            ? "markButton"
            : item.color === "red"
            ? "redButton"
            : ""
        } ${item.span ? "col-span-2" : "col-span-1"}`}
      >
        {item.label}
      </button>
    );
  });

  return (
    <>
      {calcBtns}
      {/* <button
        data-filter={
          props.button.action ? props.button.action : props.button.label
        }
        className={`px-8 py-3 rounded-md ${
          props.button.color === "standard"
            ? "standardButton"
            : props.button.color === "mark"
            ? "markButton"
            : props.button.color === "red"
            ? "redButton"
            : ""
        }`}
        onClick={
          props.button.action
            ? props.handleAction
            : props.handleTypeOne && props.handleTypeOne
        }
      >
        {props.button.label}
      </button> */}
    </>
  );
};
