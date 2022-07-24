import ThemeSwitcher from "./ThemeSwitcher";

export default function Top(props) {
  return (
    <ThemeSwitcher
      firstMode={props.firstMode}
      setFirstMode={props.setFirstMode}
    />
  );
}
