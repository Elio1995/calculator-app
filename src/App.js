import { useState } from "react";
import "./App.css";
import Keypad from "./components/Keypad";
import Screen from "./components/Screen";
import Top from "./components/Top";

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
    { label: "*", action: "multiply", color: "standard", calcBtn: false },

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

  // FIX THE DEFAULTVALUE 0 for data
  const [data, setData] = useState("");

  const [firstMode, setFirstMode] = useState(false);
  return (
    <div className={firstMode ? "dark-mode h-screen" : "light-mode h-screen"}>
      <div className="flex justify-center pt-20">
        <div className="text-center w-4/12 h-full">
          <div className="h-full flex flex-col">
            <Top setFirstMode={setFirstMode} firstMode={firstMode} />
            <div
              style={
                firstMode
                  ? { backgroundColor: "hsl(223, 31%, 20%)" }
                  : { backgroundColor: "hsl(0, 0%, 93%)" }
              }
              className="pt-5 pb-5 mb-7 rounded-xl"
            >
              <Screen firstMode={firstMode} data={data} />
            </div>
            <div
              style={
                firstMode
                  ? { backgroundColor: "hsl(223, 31%, 20%)" }
                  : { backgroundColor: "hsl(0, 5%, 81%)" }
              }
              className="p-5 rounded-xl"
            >
              <Keypad
                firstMode={firstMode}
                data={data}
                setData={setData}
                keys={keypads}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
