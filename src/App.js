import "./App.css";
import Keypad from "./components/Keypad";
import Screen from "./components/Screen";

export default function App() {
  const keypads = [
    { label: 7, color: "standard" },
    { label: 8, color: "standard" },
    { label: 9, color: "standard" },
    { label: "DEL", action: "delete", color: "mark" },

    { label: 4, color: "standard" },
    { label: 5, color: "standard" },
    { label: 6, color: "standard" },
    { label: "+", action: "add", color: "standard" },

    { label: 1, color: "standard" },
    { label: 2, color: "standard" },
    { label: 3, color: "standard" },
    { label: "-", action: "subtract", color: "standard" },

    { label: ".", action: "decimal", color: "standard" },
    { label: 0, color: "standard" },
    { label: "/", action: "divide", color: "standard" },
    { label: "X", action: "multiply", color: "standard" },

    { label: "RESET", action: "reset", color: "mark", span: true },
    { label: "=", action: "calculate", color: "red", span: true },
  ];

  return (
    <div className="flex justify-center pt-20">
      <div className="text-center w-4/12 h-full">
        <div className="mt-10 h-full flex flex-col">
          <div
            style={{ backgroundColor: "hsl(224, 36%, 15%)" }}
            className="pt-5 pb-5 mb-7  rounded-xl"
          >
            <Screen />
          </div>
          <div
            style={{ backgroundColor: "hsl(223, 31%, 20%)" }}
            className="p-5 rounded-xl"
          >
            <Keypad keys={keypads} />
          </div>
        </div>
      </div>
    </div>
  );
}
