import { useState } from "react";
import "./App.css";
import Keypad from "./components/Keypad";
import Screen from "./components/Screen";

export default function App() {
  const keypads = [
    { label: 7, color: "standard", calcBtn: true },
    { label: 8, color: "standard", calcBtn: true },
    { label: 9, color: "standard", calcBtn: true },
    { label: "DEL", action: "delete", color: "mark", calcBtn: false },

    { label: 4, color: "standard", calcBtn: true },
    { label: 5, color: "standard", calcBtn: true },
    { label: 6, color: "standard", calcBtn: true },
    { label: "+", action: "add", color: "standard", calcBtn: false },

    { label: 1, color: "standard", calcBtn: true },
    { label: 2, color: "standard", calcBtn: true },
    { label: 3, color: "standard", calcBtn: true },
    { label: "-", action: "subtract", color: "standard", calcBtn: false },

    { label: ".", action: "decimal", color: "standard", calcBtn: true },
    { label: 0, color: "standard", calcBtn: true },
    { label: "/", action: "divide", color: "standard", calcBtn: false },
    { label: "X", action: "multiply", color: "standard", calcBtn: false },

    {
      label: "RESET",
      action: "reset",
      color: "mark",
      span: true,
      calcButt: false,
    },
    {
      label: "=",
      action: "calculate",
      color: "red",
      span: true,
      calcButt: false,
    },
  ];

  const [data, setData] = useState("");
  // const calcBtns = [];
  // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
  //   calcBtns.push(
  //     <button
  //       onClick={(e) => setData(data + e.target.value)}
  //       value={item}
  //       key={item}
  //     >
  //       {item}
  //     </button>
  //   );
  // });

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center w-4/12 h-full">
        <div className="mt-10 h-full flex flex-col">
          <div
            style={{ backgroundColor: "hsl(224, 36%, 15%)" }}
            className="pt-5 pb-5 mb-7  rounded-xl"
          >
            <Screen data={data} />
          </div>
          <div
            style={{ backgroundColor: "hsl(223, 31%, 20%)" }}
            className="p-5 rounded-xl"
          >
            {/* {calcBtns} */}
            <Keypad data={data} setData={setData} keys={keypads} />
          </div>
        </div>
      </div>
    </div>
  );
}
