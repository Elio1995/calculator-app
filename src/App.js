import "./App.css";

function App() {
  const keyspads = [
    { label: 0, color: "standard" },
    { label: 1, color: "standard" },
    { label: 2, color: "standard" },
    { label: 3, color: "standard" },
    { label: 4, color: "standard" },
    { label: 5, color: "standard" },
    { label: 6, color: "standard" },
    { label: 7, color: "standard" },
    { label: 8, color: "standard" },
    { label: 9, color: "standard" },
    { label: "DEL", action: "delete", color: "mark" },
    { label: "+", action: "add", color: "standard" },
    { label: "-", action: "subtract", color: "standard" },
    { label: ".", action: "decimal", color: "standard" },
    { label: "/", action: "divide", color: "standard" },
    { label: "x", action: "multiply", color: "standard" },
    { label: "RESET", action: "reset", color: "mark", span: true },
    { label: "=", action: "calculate", color: "red", span: true },
  ];

  return (
    <div className="App">
      <p className="text-3xl text-sky-400/100">Hello</p>
    </div>
  );
}

export default App;
