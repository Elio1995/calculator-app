import "../App.css";

const Keypad = (props) => {
  return (
    <div className="h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-8">
      {props.keys.map((key, idx) => (
        <div key={idx} className={`${key.span ? "col-span-2" : "col-span-1"} `}>
          <Key key={idx} button={key} />
        </div>
      ))}
    </div>
  );
};

export default Keypad;

const Key = (props) => {
  return (
    <div>
      <button
        className={`px-8 py-3 rounded-md ${
          props.button.color === "standard"
            ? "standardButton"
            : props.button.color === "mark"
            ? "markButton"
            : props.button.color === "red"
            ? "redButton"
            : ""
        }`}
      >
        {props.button.label}
      </button>
    </div>
  );
};
