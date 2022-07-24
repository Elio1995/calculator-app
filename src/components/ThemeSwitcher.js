export default function ThemeSwitcher(props) {
  return (
    <div className="container pt-5 pb-5 mb-7 rounded-xl grid">
      <div className="grid grid-cols-2">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="switch-checkbox">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => props.setFirstMode(!props.firstMode)}
          ></input>
          <span className="slider round"> </span>
        </label>
      </div>
    </div>
  );
}
