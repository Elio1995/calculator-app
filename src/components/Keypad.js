// export default function Keypad() {
//   return;
// }

import { useState } from "react";

const Keypad = (props) => {
  //   const [theme, setTheme] = useState();

  return (
    <div
      className=" h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5"
      // className={cn(
      //   'mt-5 h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-4',
      //   theme.type == 1
      //     ? 'bg-theme1-keypad'
      //     : theme.type == 2
      //     ? 'bg-theme2-keypad'
      //     : 'bg-theme3-screen'
      // )}
    >
      {props.keys.map((key, idx) => (
        <div key={idx}>
          <Key key={idx} keys={key} />
        </div>
      ))}
    </div>
  );
};

export default Keypad;

const Key = (props) => {
  //   const [result, setResult] = useState();
  //   const [operator, setOperator] = useState();
  //   const [firstValue, setFirstValue] = useState();
  //   const [secondValue, setSecondValue] = useState();

  //   const calculate = (num1, operator, num2) => {
  //     let leftNum = parseFloat(num1);
  //     let rightNum = parseFloat(num2);

  //     if (operator == "") {
  //       return leftNum.toString();
  //     }
  //     if (num2 == "") {
  //       rightNum = leftNum;
  //     }
  //     if (operator === "add") {
  //       return (leftNum + rightNum).toString();
  //     }
  //     if (operator === "subtract") {
  //       return (leftNum - rightNum).toString();
  //     }
  //     if (operator === "multiply") {
  //       return (leftNum * rightNum).toString();
  //     }
  //     if (operator === "divide") {
  //       return (leftNum / rightNum).toString();
  //     }
  //   };

  //   const [actions] = useState({
  //     setResult,
  //     setOperator,
  //     setFirstValue,
  //     setSecondValue,
  //   });

  //   function onKeyClick(event) {
  //     const { dataset, textContent: keyContent } = event.target;
  //     const { action } = dataset;
  //     if (props.keys.action == "number") {
  //       if (result) {
  //         actions.setFirstValue(secondValue);
  //         actions.setSecondValue(keyContent);
  //         // @ts-ignore
  //         actions.setResult("");
  //         return;
  //       }
  //     }
  //   }
  return (
    <div
    // className={cn(
    //   'mt-5 h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-4',
    //   theme.type == 1
    //     ? 'bg-theme1-keypad'
    //     : theme.type == 2
    //     ? 'bg-theme2-keypad'
    //     : 'bg-theme3-screen'
    // )}
    >
      <button className="pt-6 pb-6 rounded-md text-2xl">
        {props.keys.label}
      </button>
    </div>
  );
};
