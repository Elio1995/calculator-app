const Screen = (props) => {
  return (
    <div className="screenText flex justify-end rounded-xl">
      <span
        className={`truncate ${
          props.firstMode ? "text-white" : "text-slate-600"
        } font-black`}
      >
        {props.data}
      </span>
    </div>
  );
};

export default Screen;
