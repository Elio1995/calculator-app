export default function ThemeSwitcher(props) {
  return (
    <div className=" grid grid-cols-2">
      <span className="pt-8 font-bold text-end">THEME</span>

      <div className="text-end rounded-xl grid">
        <div className="pr-1 grid grid-cols-2 font-bold">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="switch-checkbox p-1">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => props.setFirstMode(!props.firstMode)}
            ></input>
            <span className="slider round"> </span>
          </label>
        </div>
      </div>
    </div>
  );
}
