/* eslint-disable no-eval */
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
        onClick={(e) => {
          if (item.calcBtn) props.setData(props.data + e.target.value);
          if (!item.calcBtn && item.action === "delete")
            props.setData(props.data.substr(0, props.data.length - 1));
          if (!item.calcBtn && item.action === "reset") props.setData("");
          if (!item.calcBtn && item.action === "add")
            props.setData(props.data + e.target.value);
          if (!item.calcBtn && item.action === "subtract")
            props.setData(props.data + e.target.value);
          if (!item.calcBtn && item.action === "multiply")
            props.setData(props.data + e.target.value);
          if (!item.calcBtn && item.action === "divide")
            props.setData(props.data + e.target.value);
          if (!item.calcBtn && item.action === "calculate")
            try {
              props.setData(
                String(eval(props.data)).length > 3 &&
                  String(eval(props.data)).includes(".")
                  ? String(eval(props.data).toFixed(4))
                  : String(eval(props.data))
              );
            } catch (err) {
              console.log(err);
            }
        }}
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
