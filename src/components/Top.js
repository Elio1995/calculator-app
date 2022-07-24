import ThemeSwitcher from "./ThemeSwitcher";

export default function Top(props) {
  return (
    <div className="container pt-7 mb-8 grid grid-cols-3">
      <div className="calcTopText text-start pt-5 font-black">calc</div>
      <div></div>

      <ThemeSwitcher
        firstMode={props.firstMode}
        setFirstMode={props.setFirstMode}
      />
    </div>
  );
}
