/* eslint-disable no-eval */
import "../App.css";

const Keypad = (props) => {
  return (
    <div className="h-full rounded-xl p-3 grid grid-cols-4 grid-rows-5">
      <Key
        firstMode={props.firstMode}
        data={props.data}
        setData={props.setData}
        keys={props.keys}
      />
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
        className={`text-center py-3 rounded-md keyButton ${
          item.color === "standard"
            ? props.firstMode
              ? "darkStandardButton"
              : "lightStandardButton"
            : item.color === "mark"
            ? props.firstMode
              ? "darkMarkButton"
              : "lightMarkButton"
            : item.color === "red"
            ? props.firstMode
              ? "darkRedButton"
              : "lightOrangeButton"
            : ""
        } ${item.span ? "col-span-2" : "col-span-1"}`}
      >
        {item.label}
      </button>
    );
  });

  return <>{calcBtns}</>;
};
